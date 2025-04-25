
import { create } from "zustand";
import { getCookie, setCookie } from "@/lib/cookies";
import { translations } from "../trad";

interface LanguageState {
  currentLang: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

export const useLanguageStore = create<LanguageState>((set, get) => {
  const savedLang = getCookie("language") || "en"; 

  return {
    currentLang: savedLang,
    setLanguage: (lang) => {
      set({ currentLang: lang });
      setCookie("language", lang, 365);
    },
    t: (key) => {
      const lang = get().currentLang;
      return translations[lang]?.[key] || key;
    },
  };
});
