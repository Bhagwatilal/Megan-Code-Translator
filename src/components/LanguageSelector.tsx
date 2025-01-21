import React from 'react';
import { Language } from '../types';
import { ChevronDown } from 'lucide-react';

interface LanguageSelectorProps {
  languages: Language[];
  selected: Language;
  onChange: (language: Language) => void;
}

export function LanguageSelector({ languages, selected, onChange }: LanguageSelectorProps) {
  return (
    <div className="relative inline-block w-40">
      <select
        value={selected.id}
        onChange={(e) => {
          const language = languages.find(lang => lang.id === e.target.value);
          if (language) onChange(language);
        }}
        className="block w-full appearance-none bg-gray-800 text-white border border-gray-700 rounded-md py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
      >
        {languages.map((language) => (
          <option key={language.id} value={language.id} className="bg-gray-800">
            {language.name}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
        <ChevronDown size={16} />
      </div>
    </div>
  );
}