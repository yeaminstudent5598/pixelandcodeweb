// src/context/LanguageContext.tsx
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type LanguageContextType = {
  language: boolean;
  setLanguage: (lang: boolean) => void;
};

// Context create
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Provider
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState(false); // default English

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// custom hook
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
