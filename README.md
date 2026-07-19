#  Fab Finance

> Application de simulation de prêt et de demande de prêt — 100% frontend React
---

## Table des matières

- [Prérequis](#-prérequis)
- [Installation](#-installation)
- [Démarrer le projet](#-démarrer-le-projet)
- [Structure du projet](#-structure-du-projet)
- [Scripts disponibles](#-scripts-disponibles)
- [Problèmes courants](#-problèmes-courants)

---

## Prérequis

Avant de commencer, tu dois avoir installé sur ton ordinateur :

### 1. Node.js (version 18 ou plus récente)

Télécharge-le ici : [https://nodejs.org](https://nodejs.org)  
Choisis la version **LTS** (recommandée).

Pour vérifier que Node.js est bien installé, ouvre un terminal et tape :

```bash
node --version
```

Tu devrais voir quelque chose comme `v18.x.x` ou `v20.x.x`.

### 2. Git

Télécharge-le ici : [https://git-scm.com](https://git-scm.com)

Pour vérifier que Git est installé :

```bash
git --version
```

---

## Installation

Suis ces étapes **dans l'ordre**, une par une.

### Étape 1 — Cloner le projet

Ouvre un terminal (ou PowerShell sur Windows) et tape :

```bash
git clone https://github.com/Zey000a/fab-finance.git
```

### Étape 2 — Aller dans le dossier du projet

```bash
cd fab-finance
```

### Étape 3 — Installer les dépendances

```bash
npm install
```

> Cette commande peut prendre 1 à 2 minutes. C'est normal !  
> Elle télécharge tous les outils nécessaires au projet.

---

## Démarrer le projet

Une fois l'installation terminée, lance le serveur de développement :

```bash
npm run dev
```

Ouvre ensuite ton navigateur et va sur :

```
http://localhost:5173
```

L'application devrait s'afficher !

> **Note :** Si le port `5173` est déjà utilisé, Vite en choisira un autre automatiquement. Regarde le message dans le terminal pour voir l'adresse exacte.

---

Aloo
## Stack technique

| Technologie | Rôle |
|---|---|
| [React](https://react.dev) | Interface utilisateur |
| [Vite](https://vitejs.dev) | Serveur de développement ultra-rapide |
| [TypeScript](https://www.typescriptlang.org) | JavaScript avec typage pour moins de bugs |
| [Tailwind CSS](https://tailwindcss.com) | Styles utilitaires directement dans le HTML |

---

## Structure du projet

```
fab-finance/
├── public/          → Fichiers statiques (images, favicon...)
├── src/
│   ├── assets/      → Images et ressources
│   ├── components/  → Composants React réutilisables
│   ├── pages/       → Pages de l'application
│   ├── App.jsx      → Composant principal
│   └── main.jsx     → Point d'entrée de l'application
├── index.html       → Page HTML principale
├── package.json     → Liste des dépendances
└── vite.config.js   → Configuration de Vite
```

---

## Scripts disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Lance l'application en mode développement |
| `npm run build` | Crée une version optimisée pour la production |
| `npm run preview` | Prévisualise la version de production en local |

---

## Problèmes courants

### `npm install` échoue

Vérifie que tu es bien dans le bon dossier :

```bash
pwd
# Doit afficher quelque chose comme : .../fab-finance
```

Si le problème persiste, essaie de supprimer le dossier `node_modules` et de relancer :

```bash
rm -rf node_modules
npm install
```

---

## Conseils pour débuter

- **Ne ferme pas le terminal** pendant que tu travailles — c'est lui qui fait tourner l'application.
- **Les modifications sont visibles en temps réel** : dès que tu sauvegardes un fichier, le navigateur se met à jour automatiquement.
- Pour **arrêter le serveur**, appuie sur `Ctrl + C` dans le terminal.

---

##  Contribuer

Les contributions sont les bienvenues ! N'hésite pas à ouvrir une *issue* ou une *pull request*.

---

*Projet créé avec — React + Vite*