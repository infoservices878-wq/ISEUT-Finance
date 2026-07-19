import { createContext, useContext, useState, useEffect, ReactNode } from "react"

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────

export interface CookiePreferences {
  necessary:  true          // toujours true, non modifiable
  analytics:  boolean
  marketing:  boolean
}

export type ConsentStatus = "pending" | "accepted" | "refused" | "custom"

interface CookieContextType {
  status:      ConsentStatus
  preferences: CookiePreferences
  acceptAll:   () => void
  refuseAll:   () => void
  saveCustom:  (prefs: Omit<CookiePreferences, "necessary">) => void
  reset:       () => void
}

// ─────────────────────────────────────────────
// STORAGE KEY
// ─────────────────────────────────────────────

const STORAGE_KEY = "Fab Finance_cookie_consent"

function loadFromStorage(): { status: ConsentStatus; preferences: CookiePreferences } | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

function saveToStorage(status: ConsentStatus, preferences: CookiePreferences) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      status,
      preferences,
      savedAt: new Date().toISOString(),
    }))
  } catch { /* silently fail */ }
}

// ─────────────────────────────────────────────
// DEFAULTS
// ─────────────────────────────────────────────

const DEFAULT_PREFS: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
}

// ─────────────────────────────────────────────
// CONTEXT
// ─────────────────────────────────────────────

const CookieContext = createContext<CookieContextType | null>(null)

export function CookieProvider({ children }: { children: ReactNode }) {
  const [status,      setStatus]      = useState<ConsentStatus>("pending")
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFS)

  // Chargement initial depuis localStorage
  useEffect(() => {
    const saved = loadFromStorage()
    if (saved) {
      setStatus(saved.status)
      setPreferences(saved.preferences)
    }
  }, [])

  const acceptAll = () => {
    const prefs: CookiePreferences = { necessary: true, analytics: true, marketing: true }
    setStatus("accepted")
    setPreferences(prefs)
    saveToStorage("accepted", prefs)
  }

  const refuseAll = () => {
    const prefs: CookiePreferences = { necessary: true, analytics: false, marketing: false }
    setStatus("refused")
    setPreferences(prefs)
    saveToStorage("refused", prefs)
  }

  const saveCustom = (custom: Omit<CookiePreferences, "necessary">) => {
    const prefs: CookiePreferences = { necessary: true, ...custom }
    setStatus("custom")
    setPreferences(prefs)
    saveToStorage("custom", prefs)
  }

  const reset = () => {
    localStorage.removeItem(STORAGE_KEY)
    setStatus("pending")
    setPreferences(DEFAULT_PREFS)
  }

  return (
    <CookieContext.Provider value={{ status, preferences, acceptAll, refuseAll, saveCustom, reset }}>
      {children}
    </CookieContext.Provider>
  )
}

// ─────────────────────────────────────────────
// HOOK
// ─────────────────────────────────────────────

export function useCookies() {
  const ctx = useContext(CookieContext)
  if (!ctx) throw new Error("useCookies must be used inside <CookieProvider>")
  return ctx
}