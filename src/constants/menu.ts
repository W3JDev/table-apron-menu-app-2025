import { Language } from '../types/menu';

export const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt' },
  { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu' }
];

export const icons = {
  nuts: '🥜',
  seafood: '🦐',
  gluten: '🌾',
  dairy: '🥛',
  vegetarian: '🥬',
  vegan: '🌱',
  spicy: '🌶️',
  alcohol: '🍷',
  pork: '🥓',
  eggs: '🥚',
  sharing: '👥',
  raw: '🐟',
  popular: '⭐',
  halal: '☪️'
} as const;

export const dietaryFilters = [
  { id: 'vegetarian', label: 'Vegetarian', icon: icons.vegetarian },
  { id: 'vegan', label: 'Vegan', icon: icons.vegan },
  { id: 'halal', label: 'Halal', icon: icons.halal },
  { id: 'glutenFree', label: 'Gluten Free', icon: icons.gluten },
  { id: 'dairyFree', label: 'Dairy Free', icon: icons.dairy },
  { id: 'nutFree', label: 'Nut Free', icon: icons.nuts },
  { id: 'noSpicy', label: 'No Spicy', icon: icons.spicy }
];

export const uiTranslations: Record<string, { 
  askAboutMenu: string;
  inputPlaceholder: string;
}> = {
  en: {
    askAboutMenu: "How can I help you with our menu today?",
    inputPlaceholder: "Ask about menu items, allergies, or get recommendations..."
  },
  zh: {
    askAboutMenu: "今天我能为您介绍些什么菜品？",
    inputPlaceholder: "询问菜品、过敏原或获取推荐..."
  },
  vi: {
    askAboutMenu: "Tôi có thể giúp gì cho bạn với thực đơn hôm nay?",
    inputPlaceholder: "Hỏi về món ăn, dị ứng hoặc nhận đề xuất..."
  },
  ms: {
    askAboutMenu: "Bagaimana saya boleh bantu anda dengan menu hari ini?",
    inputPlaceholder: "Tanya tentang menu, alahan atau dapatkan cadangan..."
  }
};