import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark' | 'system'
export type ResolvedTheme = 'light' | 'dark'

interface UseThemeReturn {
  theme: Theme
  resolvedTheme: ResolvedTheme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const STORAGE_KEY = 'theme-preference'

function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'system'
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && ['light', 'dark', 'system'].includes(stored)) {
      return stored as Theme
    }
  } catch (error) {
    console.warn('Failed to read theme from localStorage:', error)
  }
  return 'system'
}

function resolveTheme(theme: Theme): ResolvedTheme {
  return theme === 'system' ? getSystemTheme() : theme
}

export function useTheme(): UseThemeReturn {
  const [theme, setThemeState] = useState<Theme>(() => getStoredTheme())
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => 
    resolveTheme(getStoredTheme())
  )

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    
    try {
      localStorage.setItem(STORAGE_KEY, newTheme)
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error)
    }
  }

  const toggleTheme = () => {
    const nextTheme = resolvedTheme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
  }

  // Apply theme to document
  useEffect(() => {
    const resolved = resolveTheme(theme)
    setResolvedTheme(resolved)
    
    // Remove existing theme classes
    document.documentElement.removeAttribute('data-theme')
    
    // Apply new theme
    document.documentElement.setAttribute('data-theme', resolved)
  }, [theme])

  // Listen for system theme changes
  useEffect(() => {
    if (theme !== 'system') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      const resolved = resolveTheme('system')
      setResolvedTheme(resolved)
      document.documentElement.setAttribute('data-theme', resolved)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])

  return {
    theme,
    resolvedTheme,
    setTheme,
    toggleTheme
  }
}