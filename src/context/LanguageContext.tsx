import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "hi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
//   const [language, setLanguage] = useState<Language>("en");
const [language, setLanguage] = useState<Language>(
  (localStorage.getItem("lang") as Language) || "en"
);

const updateLanguage = (lang: Language) => {
  localStorage.setItem("lang", lang);
  setLanguage(lang);
};

  return (
    <LanguageContext.Provider value={{ language, setLanguage: updateLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};