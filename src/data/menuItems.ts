// Batch 1: Starters and Bread & Spread items
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
    dietary: ['vegetarian'],
    image: "Sourdough w Red Date Butter.jpg"
  },
  {
    id: 3,
    category: 'Bread & Spread',
    name: {
      en: "Ciabatta with Hummus, Herbs & Olives",
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
  },
  {
    id: 5,
    category: 'Small Vegetable',
    name: {
      en: "Soup of the Day",
      zh: "例汤",
      vi: "Súp trong ngày",
      ms: "Sup Hari Ini"
    },
    description: {
      en: "Rotation: tomato, cauliflower, pumpkin, carrot ginger soup (Carrot Ginger: vege stock, carrot, ginger, cream)"
    },
    price: 22,
    dietary: ['vegetarian'],
    allergens: ['dairy'],
    preferences: ['varies'],
    notes: "Vegan option available without cream"
  },
  {
    id: 6,
    category: 'Small Vegetable',
    name: {
      en: "Roasted Cauliflower & Ricotta",
      zh: "烤花椰菜配瑞可塔芝士",
      vi: "Bông cải xanh nướng với phô mai Ricotta",
      ms: "Kubis Bunga Panggang dengan Ricotta"
    },
    description: {
      en: "Ricotta cheese dressing, pickled onion, celery, bread crumbs"
    },
    price: 25,
    allergens: ['dairy', 'gluten'],
    dietary: ['vegetarian'],
    preferences: ['no raw onion']
  },
  {
    id: 7,
    category: 'Small Vegetable',
    name: {
      en: "Charred Cabbage with Kombu Dressing",
      zh: "烤卷心菜配海带酱",
      vi: "Bắp cải nướng với sốt rong biển",
      ms: "Kubis Panggang dengan Sos Kombu"
    },
    description: {
      en: "Green cabbage, seaweed-wakame, chili oil, sesame seed, green onion, mirin, kombu soy, garlic, tofu"
    },
    price: 26,
    allergens: ['sesame', 'soy'],
    dietary: ['vegan'],
    preferences: ['no raw garlic', 'no onion', 'no spicy'],
    image: "Charred cabbage kombu dressing tofu spreaf.jpg"
  }
];

export interface MenuItem {
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
  notes?: string;
}