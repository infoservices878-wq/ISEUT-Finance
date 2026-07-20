// scripts/translate-i18n.mjs
//
// Traduit automatiquement les fichiers de langue manquants à partir de fr.ts,
// en utilisant l'API DeepL. Ne modifie jamais les traductions déjà présentes :
// seules les clés manquantes (ou encore identiques au français) sont complétées.
//
// Utilisation : node scripts/translate-i18n.mjs

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---- Configuration ---------------------------------------------------

const I18N_DIR = path.resolve(__dirname, '../src/lib/i18n');
const KEY_FILE = path.resolve(__dirname, 'deepl-key.local.json');

const SOURCE_LOCALE = 'fr';
const TARGET_LOCALES = [
  { code: 'en', deepl: 'EN-US' }, // utilise 'EN-GB' si tu préfères l'anglais britannique
  { code: 'de', deepl: 'DE' },
  { code: 'nl', deepl: 'NL' },
];

const BATCH_SIZE = 50; // DeepL limite le nombre de textes par requête

// ---- Chargement de la clé API -----------------------------------------

function loadApiKey() {
  if (!fs.existsSync(KEY_FILE)) {
    throw new Error(
      `Fichier de clé introuvable : ${KEY_FILE}\n` +
      `Crée ce fichier avec le contenu suivant :\n{\n  "apiKey": "TA_CLE_DEEPL"\n}`
    );
  }
  const { apiKey } = JSON.parse(fs.readFileSync(KEY_FILE, 'utf-8'));
  if (!apiKey) throw new Error('La clé "apiKey" est vide dans deepl-key.local.json');
  return apiKey;
}

// ---- Lecture des fichiers .ts (sans dépendance au compilateur TypeScript) ---

function extractObjectSource(fileSource) {
  const defaultMatch = fileSource.match(/export\s+default\s+/);
  const constMatch = fileSource.match(/export\s+const\s+\w+\s*(?::[^=]+)?=\s*/);

  let startIdx, isDefault;
  if (defaultMatch) {
    isDefault = true;
    startIdx = defaultMatch.index + defaultMatch[0].length;
  } else if (constMatch) {
    isDefault = false;
    startIdx = constMatch.index + constMatch[0].length;
  } else {
    throw new Error("Impossible de trouver un export ('export default' ou 'export const') dans ce fichier.");
  }

  const braceStart = fileSource.indexOf('{', startIdx);
  if (braceStart === -1) throw new Error("Aucun objet littéral trouvé après l'export.");

  let depth = 0;
  let inString = null;
  let escaped = false;
  let i = braceStart;
  for (; i < fileSource.length; i++) {
    const ch = fileSource[i];
    if (inString) {
      if (escaped) escaped = false;
      else if (ch === '\\') escaped = true;
      else if (ch === inString) inString = null;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') { inString = ch; continue; }
    if (ch === '{') depth++;
    else if (ch === '}') { depth--; if (depth === 0) break; }
  }
  if (depth !== 0) throw new Error('Objet littéral mal formé (accolades non équilibrées).');

  return { isDefault, objectSource: fileSource.slice(braceStart, i + 1) };
}

// Détecte les imports du style :
//   import { fr } from './fr';
//   import fr from './fr';
// afin de pouvoir résoudre les patterns "...fr" (spread) dans l'objet.
function extractImports(fileSource) {
  const importRegex = /import\s+(?:\{\s*([^}]+)\s*\}|(\w+))\s+from\s+['"](\.[^'"]+)['"]/g;
  const imports = [];
  let m;
  while ((m = importRegex.exec(fileSource))) {
    if (m[1]) {
      const names = m[1].split(',').map((s) => s.trim()).filter(Boolean);
      for (const n of names) {
        const [orig, alias] = n.split(/\s+as\s+/).map((s) => s.trim());
        imports.push({ localName: alias || orig, source: m[3] });
      }
    } else if (m[2]) {
      imports.push({ localName: m[2], source: m[3] });
    }
  }
  return imports;
}

function resolveImportPath(fromFile, specifier) {
  let resolved = path.resolve(path.dirname(fromFile), specifier);
  if (fs.existsSync(resolved + '.ts')) return resolved + '.ts';
  if (fs.existsSync(resolved + '.tsx')) return resolved + '.tsx';
  if (fs.existsSync(path.join(resolved, 'index.ts'))) return path.join(resolved, 'index.ts');
  return resolved;
}

const moduleCache = new Map();

function loadModule(filePath) {
  if (moduleCache.has(filePath)) return moduleCache.get(filePath);
  if (!fs.existsSync(filePath)) return null;

  const source = fs.readFileSync(filePath, 'utf-8');
  const imports = extractImports(source);

  const scope = {};
  for (const imp of imports) {
    const depPath = resolveImportPath(filePath, imp.source);
    const dep = loadModule(depPath); // ignore unresolved imports (npm packages, type-only imports, etc.)
    if (dep) scope[imp.localName] = dep.data;
  }

  const { isDefault, objectSource } = extractObjectSource(source);
  const argNames = Object.keys(scope);
  const argValues = argNames.map((k) => scope[k]);
  const fn = new Function(...argNames, `"use strict"; return (${objectSource});`);
  const data = fn(...argValues);

  const result = { isDefault, data };
  moduleCache.set(filePath, result);
  return result;
}

function loadLocaleFile(localeCode) {
  return loadModule(path.join(I18N_DIR, `${localeCode}.ts`));
}

// ---- Parcours récursif de l'objet de traductions -----------------------

function collectStrings(obj, pathPrefix = [], out = []) {
  for (const [key, value] of Object.entries(obj)) {
    const currentPath = [...pathPrefix, key];
    if (typeof value === 'string') {
      out.push({ path: currentPath, value });
    } else if (Array.isArray(value)) {
      value.forEach((item, idx) => {
        const itemPath = [...currentPath, idx];
        if (typeof item === 'string') out.push({ path: itemPath, value: item });
        else if (item && typeof item === 'object') collectStrings(item, itemPath, out);
      });
    } else if (value && typeof value === 'object') {
      collectStrings(value, currentPath, out);
    }
  }
  return out;
}

function getAtPath(obj, pathArr) {
  return pathArr.reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
}

function setAtPath(obj, pathArr, value) {
  let cur = obj;
  for (let i = 0; i < pathArr.length - 1; i++) {
    const key = pathArr[i];
    const nextKey = pathArr[i + 1];
    const nextIsArrayIndex = typeof nextKey === 'number' || /^\d+$/.test(String(nextKey));
    if (cur[key] === undefined) cur[key] = nextIsArrayIndex ? [] : {};
    cur = cur[key];
  }
  cur[pathArr[pathArr.length - 1]] = value;
}

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
  return chunks;
}

// ---- Appel à l'API DeepL ------------------------------------------------

async function deeplTranslateBatch(texts, targetLang, apiKey) {
  const endpoint = apiKey.trim().endsWith(':fx')
    ? 'https://api-free.deepl.com/v2/translate'
    : 'https://api.deepl.com/v2/translate';

  const body = new URLSearchParams();
  texts.forEach((t) => body.append('text', t));
  body.append('target_lang', targetLang);
  body.append('source_lang', 'FR');

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `DeepL-Auth-Key ${apiKey}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Erreur DeepL (${res.status}) : ${errText}`);
  }
  const data = await res.json();
  return data.translations.map((t) => t.text);
}

// ---- Écriture du fichier de sortie --------------------------------------
// NOTE : le fichier de sortie est toujours réécrit "à plat" (sans spread /
// import). Si de.ts utilisait "...fr", ce ne sera plus le cas après un
// passage du script : toutes les valeurs seront explicitement écrites,
// donc plus aucune dépendance cachée à fr.ts.

function toFileContent(isDefault, localeCode, data) {
  const body = JSON.stringify(data, null, 2);
  return isDefault ? `export default ${body};\n` : `export const ${localeCode} = ${body};\n`;
}

// ---- Programme principal -------------------------------------------------

async function main() {
  const apiKey = loadApiKey();

  const sourcePath = path.join(I18N_DIR, `${SOURCE_LOCALE}.ts`);
  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Fichier source introuvable : ${sourcePath}`);
  }
  const { isDefault, data: sourceData } = loadLocaleFile(SOURCE_LOCALE);
  const sourceStrings = collectStrings(sourceData);
  console.log(`📖 ${sourceStrings.length} textes trouvés dans ${SOURCE_LOCALE}.ts`);

  for (const target of TARGET_LOCALES) {
    console.log(`\n🌍 Traitement de ${target.code}.ts...`);
    const existing = loadLocaleFile(target.code);
    const targetData = existing ? existing.data : {};

    const missing = sourceStrings.filter((entry) => {
      const value = getAtPath(targetData, entry.path);
      // Manquant si absent, vide, OU identique au français (donc probablement
      // hérité par un "...fr" jamais vraiment traduit).
      return value === undefined || value === '' || value === entry.value;
    });
    console.log(`   ${missing.length} traduction(s) manquante(s) ou non traduite(s) sur ${sourceStrings.length}`);

    if (missing.length > 0) {
      const chunks = chunkArray(missing, BATCH_SIZE);
      let done = 0;
      for (const chunk of chunks) {
        const texts = chunk.map((e) => e.value);
        const translations = await deeplTranslateBatch(texts, target.deepl, apiKey);
        chunk.forEach((entry, i) => setAtPath(targetData, entry.path, translations[i]));
        done += chunk.length;
        console.log(`   ✅ ${done}/${missing.length} traduits`);
      }
    }

    const outPath = path.join(I18N_DIR, `${target.code}.ts`);
    fs.writeFileSync(outPath, toFileContent(isDefault, target.code, targetData), 'utf-8');
    console.log(`   💾 ${target.code}.ts mis à jour`);
  }

  console.log('\n✨ Terminé ! Pense à relancer Prettier si le formatage te dérange.');
}

main().catch((err) => {
  console.error('\n❌ Erreur :', err.message);
  process.exit(1);
});
