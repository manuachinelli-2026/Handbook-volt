'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext({ lang: 'es', setLang: () => {} })

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('es')

  useEffect(() => {
    const saved = localStorage.getItem('volt-guide-lang')
    if (saved === 'es' || saved === 'en') setLangState(saved)
  }, [])

  function setLang(l) {
    setLangState(l)
    localStorage.setItem('volt-guide-lang', l)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

// Helper: pick the right string based on current lang
export function t(obj, lang) {
  return obj[lang] ?? obj['es']
}
