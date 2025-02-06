export interface MultiLanguageText {
  en: string;
  zh?: string;
  vi?: string;
  ms?: string;
  [key: string]: string | undefined;  // Add index signature
}

export interface MenuItem {
  id: number;
  category: string;
  name: MultiLanguageText;
  description?: MultiLanguageText;
  price: number;
  pax?: string;
  allergens?: string[];
  dietary?: string[];
  preferences?: string[];
  isPopular?: boolean;
  isSpicy?: boolean;
  image?: string;
  notes?: string;
}

export interface WineItem {
  id: string;
  category: string;
  name: string;
  region: string;
  year: number;
  price: number;
  priceOption: 'glass' | 'bottle';
  allergens: string[];
}

export interface ChatMessage {
  role: 'assistant' | 'user';
  content: string;
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
}

export interface DietaryFilter {
  id: string;
  label: string;
  icon: string;
}

export interface Icons {
  [key: string]: string;
}

export interface UITranslations {
  [key: string]: {
    [key: string]: string;
  };
}

export interface AllergenTranslations {
  [key: string]: {
    [key: string]: string;
  };
}