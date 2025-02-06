export const categories = [
  'Starter',
  'Bread & Spread',
  'Small Vegetable',
  'Pasta/Rice',
  'Mains',
  'Large/Sharing',
  'Desserts',
  'Wine'
];

export const menuItems = [
  {
    id: 1,
    category: 'Starter',
    name: {
      en: "Prosperity Yee Sang",
      zh: "发财鱼生",
      vi: "Gỏi cá hồi thịnh vượng",
      ms: "Yee Sang Kemakmuran"
    },
    description: {
      en: "Herbs, pickle, cold smoked salmon, coconut flake, muralia sesame oil, plum sugar, spices, asam jawa, cherry jam, green lime",
    },
    price: 118,
    pax: "6-8",
    allergens: ['fish', 'sesame'],
    dietary: ['pescatarian'],
    preferences: ['no raw garlic', 'no coriander', 'no spicy'],
    isPopular: true,
    image: "Prosperity Yee Sang.jpg"
  },
  {
    id: 2,
    category: 'Bread & Spread',
    name: {
      en: "Sourdough with Red Date Butter",
      zh: "红枣牛油抹面",
      vi: "Bánh mì chua với bơ chà là đỏ",
      ms: "Roti Sourdough dengan Mentega Kurma Merah"
    },
    description: {
      en: "Red date, brown sugar, pamplie unsalted butter"
    },
    price: 23,
    allergens: ['dairy'],
    dietary: ['vegetarian']
  },
  {
    id: 3,
    category: 'Bread & Spread',
    name: {
      en: "Ciabatta with Hummus",
      zh: "中东面包配鹰嘴豆泥",
      vi: "Bánh mì Ciabatta với Hummus",
      ms: "Ciabatta dengan Hummus"
    },
    description: {
      en: "Green olive, Italian flat parsley, red onion, confit garlic, chickpea, paprika powder, sesame, lemon juice"
    },
    price: 25,
    allergens: ['sesame'],
    dietary: ['vegan'],
    preferences: ['no raw garlic', 'no coriander', 'no onion']
  },
  {
    id: 4,
    category: 'Bread & Spread',
    name: {
      en: "Smashed Chilli Eggplant Dip",
      zh: "雪板茄子",
      vi: "Sốt cà tím ớt băm",
      ms: "Sos Terung Cili"
    },
    description: {
      en: "Roasted eggplant & charleston chili, garlic, sesame oil, soy sauce, vinegar (served with sourdough/ciabatta)"
    },
    price: 28,
    allergens: ['sesame', 'soy', 'gluten'],
    dietary: ['vegan'],
    preferences: ['no raw garlic', 'no spicy'],
    image: "Smashed Chilli Eggplant Dip 雪板茄子.jpg"
  }
];

export const wineList = [
  {
    id: 'w1',
    category: 'House Pour - White',
    name: 'Sauvignon Blanc',
    region: 'Marlborough, New Zealand',
    year: 2023,
    price: 32,
    priceByGlass: true,
    allergens: ['alcohol']
  },
  {
    id: 'w2',
    category: 'House Pour - White',
    name: 'Pinot Noir',
    region: 'Wairau Valley, New Zealand',
    year: 2023,
    price: 32,
    priceByGlass: true,
    allergens: ['alcohol']
  }
  // ... add more wines
];

export type MenuItem = {
  id: number;
  category: string;
  name: {
    en: string;
    zh?: string;
    vi?: string;
    ms?: string;
  };
  description: {
    en: string;
    zh?: string;
    vi?: string;
    ms?: string;
  };
  price: number;
  pax?: string;
  allergens?: string[];
  dietary?: string[];
  preferences?: string[];
  isPopular?: boolean;
  image?: string;
};

export type WineItem = {
  id: string;
  category: string;
  name: string;
  region: string;
  year: number;
  price: number;
  priceByGlass?: boolean;
  allergens: string[];
};