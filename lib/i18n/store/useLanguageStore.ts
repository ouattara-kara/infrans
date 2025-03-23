
import { create } from "zustand";
import { getCookie, setCookie } from "@/lib/cookies";
import { translations } from "../trad";

interface LanguageState {
  currentLang: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

export const useLanguageStore = create<LanguageState>((set, get) => {
  const savedLang = getCookie("language") || "fr"; // Langue par défaut

  return {
    currentLang: savedLang,
    setLanguage: (lang) => {
      set({ currentLang: lang });
      setCookie("language", lang, 365);
    },
    t: (key) => {
      const lang = get().currentLang; // 🔥 Utiliser la langue actuelle
      return translations[lang]?.[key] || key;
    },
  };
});
