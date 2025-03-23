"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLanguageStore } from "@/lib/i18n/store/useLanguageStore";

const languages = [
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "en", name: "English", flag: "🇬🇧" },
];

export default function LanguageSwitcher() {
  const { currentLang, setLanguage } = useLanguageStore();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Trouver la langue actuelle dans la liste
  const selectedLanguage = languages.find((lang) => lang.code === currentLang) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        ref={buttonRef}
        variant="ghost"
        size="icon"
        className="h-8 w-8 flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{selectedLanguage.flag}</span>
        <span className="sr-only">Changer de langue</span>
      </Button>

      {isOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-popover border border-border z-50"
        >
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-accent ${
                  language.code === currentLang ? "bg-accent/50" : ""
                }`}
              >
                <span className="mr-2">{language.flag}</span>
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
