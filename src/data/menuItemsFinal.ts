// Final Batch: Desserts and Wine List
export const menuItemsFinal = [
  {
    id: 18,
    category: 'Desserts',
    name: {
      en: "Eggnog Bread Pudding Brulee",
      zh: "蛋酒布丁面包",
      vi: "Bánh pudding rượu trứng",
      ms: "Puding Roti Eggnog"
    },
    description: {
      en: "Creme anglaise, rum-eggnog, vanilla sauce, olive oil, spices"
    },
    price: 28,
    allergens: ['dairy', 'egg', 'alcohol'],
    dietary: ['vegetarian'],
    preferences: ['no alcohol']
  },
  {
    id: 19,
    category: 'Desserts',
    name: {
      en: "Oolong Tea Panna Cotta",
      zh: "乌龙茶意式奶冻",
      vi: "Panna Cotta trà Ô long",
      ms: "Panna Cotta Teh Oolong"
    },
    description: {
      en: "Golf syrup, aged for 2 days, dressed with pork jus, parsley, capers, diced red onion"
    },
    price: 25,
    dietary: ['contains meat'],
    preferences: ['no meat', 'no raw onion', 'no coriander']
  },
  {
    id: 20,
    category: 'Desserts',
    name: {
      en: "Crispy Wonton",
      zh: "香脆云吞",
      vi: "Hoành thánh giòn",
      ms: "Wantan Rangup"
    },
    description: {
      en: "Fermented soy mayo, pickles, served with viennoiserie (cinnamon roll, almond, chocolate)"
    },
    price: 22,
    allergens: ['soy', 'gluten', 'tree nuts', 'dairy'],
    dietary: ['contains meat'],
    preferences: ['no pork'],
    image: "Crispy Wanton.jpg"
  },
  {
    id: 21,
    category: 'Desserts',
    name: {
      en: "Roasted Aged Duck Breast with Beetroot Jam",
      zh: "烤鸭胸配甜菜根酱",
      vi: "Ức vịt nướng với mứt củ dền",
      ms: "Dada Itik Panggang dengan Jem Bit"
    },
    description: {
      en: "Beetroot jam, orange, rocket leaf, leek, onion, lemon, five spices, maltose, dijon mustard"
    },
    price: 32,
    allergens: ['mustard'],
    dietary: ['contains meat'],
    preferences: ['no raw onion'],
    image: "Roasted aged duck breast w beetroot jam.jpg"
  },
  {
    id: 22,
    category: 'Desserts',
    name: {
      en: "Tiramisu",
      zh: "提拉米苏",
      vi: "Tiramisu",
      ms: "Tiramisu"
    },
    description: {
      en: "Ladyfingers, Kahida coffee, rum, mascarpone, cocoa powder"
    },
    price: 26,
    allergens: ['dairy', 'gluten', 'alcohol'],
    dietary: ['vegetarian'],
    preferences: ['no alcohol']
  }
];

export const wineList = [
  {
    id: 'w1',
    category: 'House Pour - White',
    name: "Sauvignon Blanc",
    region: "Marlborough, New Zealand",
    year: 2023,
    price: 32,
    priceOption: "glass",
    allergens: ['alcohol']
  },
  {
    id: 'w2',
    category: 'House Pour - White',
    name: "Pinot Noir",
    region: "Wairau Valley, New Zealand",
    year: 2023,
    price: 32,
    priceOption: "glass",
    allergens: ['alcohol']
  },
  {
    id: 'w3',
    category: 'House Pour - Red',
    name: "Nerello Mascalese Blend",
    region: "Rioja, Spain",
    year: 2023,
    price: 36,
    priceOption: "glass",
    allergens: ['alcohol']
  },
  {
    id: 'w4',
    category: 'Sparkling',
    name: "Prosecco",
    region: "Murray Darling, Australia",
    year: 2022,
    price: 235,
    priceOption: "bottle",
    allergens: ['alcohol']
  },
  {
    id: 'w5',
    category: 'Sparkling',
    name: "Pet Nat",
    region: "Kamptal, Austria",
    year: 2021,
    price: 255,
    priceOption: "bottle",
    allergens: ['alcohol']
  },
  {
    id: 'w6',
    category: 'White',
    name: "Riesling",
    region: "Mosel, Germany",
    year: 2022,
    price: 200,
    priceOption: "bottle",
    allergens: ['alcohol']
  },
  {
    id: 'w7',
    category: 'White',
    name: "Garganega",
    region: "Veneto, Italy",
    year: 2021,
    price: 165,
    priceOption: "bottle",
    allergens: ['alcohol']
  },
  {
    id: 'w8',
    category: 'White',
    name: "Chenin Blanc",
    region: "Swartland, South Africa",
    year: 2023,
    price: 235,
    priceOption: "bottle",
    allergens: ['alcohol']
  },
  {
    id: 'w9',
    category: 'White',
    name: "Grenache Blanc",
    region: "Palset, Spain",
    year: 2021,
    price: 265,
    priceOption: "bottle",
    allergens: ['alcohol']
  },
  {
    id: 'w10',
    category: 'Red',
    name: "Merlot Blend",
    region: "Adelaide Hills, Australia",
    year: 2023,
    price: 285,
    priceOption: "bottle",
    allergens: ['alcohol']
  },
  {
    id: 'w11',
    category: 'Red',
    name: "Cabernet Sauvignon",
    region: "Stellenbosch, Cape Town, South Africa",
    year: 2022,
    price: 235,
    priceOption: "bottle",
    allergens: ['alcohol']
  },
  {
    id: 'w12',
    category: 'Red',
    name: "Montepulciano",
    region: "Abruzzo, Italy",
    year: 2022,
    price: 165,
    priceOption: "bottle",
    allergens: ['alcohol']
  },
  {
    id: 'w13',
    category: 'Red',
    name: "Grechetto Rosso",
    region: "Lazio, Italy",
    year: 2022,
    price: 295,
    priceOption: "bottle",
    allergens: ['alcohol']
  }
];

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