// Batch 2: Pasta/Rice, Mains, and Large/Sharing items
export const menuItemsSecondBatch = [
  {
    id: 8,
    category: 'Pasta/Rice',
    name: {
      en: "Lotus & Celtuce with Scallop Salad",
      zh: "凉拌莴苣莲藕干贝",
      vi: "Gỏi sò điệp với sen và xà lách celtuce",
      ms: "Salad Teratai & Celtuce dengan Skallop"
    },
    description: {
      en: "Celtuce, lotus root, Chinese yam, chili, scallop, flavoured oil dressing, coriander seed, seaweed powder"
    },
    price: 35,
    allergens: ['shellfish'],
    dietary: ['pescatarian'],
    preferences: ['no coriander', 'no spicy'],
    image: "Lotus & Celtuce with Scallop Salad.jpg"
  },
  {
    id: 9,
    category: 'Pasta/Rice',
    name: {
      en: "Casarecce Pasta al Ragu",
      zh: "意大利肉酱面",
      vi: "Mì Casarecce với sốt thịt băm",
      ms: "Pasta Casarecce dengan Ragu"
    },
    description: {
      en: "Pork/beef, Padano cheese, parsley, egg, flour, tomato, carrot, celery, onion"
    },
    price: 45,
    allergens: ['dairy', 'gluten', 'egg'],
    dietary: ['contains meat'],
    preferences: ['no coriander', 'no onion', 'no beef', 'no pork']
  },
  {
    id: 10,
    category: 'Pasta/Rice',
    name: {
      en: "Casarecce Prawn Pasta",
      zh: "虾仁意大利面",
      vi: "Mì Casarecce với tôm",
      ms: "Pasta Casarecce dengan Udang"
    },
    description: {
      en: "Tiger prawn, tomato, prawn oil, prawn stock, bay leaf, chili flake, garlic"
    },
    price: 48,
    allergens: ['shellfish'],
    dietary: ['pescatarian'],
    preferences: ['no spicy']
  },
  {
    id: 11,
    category: 'Pasta/Rice',
    name: {
      en: "Jinhua Ham & Bok Choy Rice",
      zh: "金华火腿白菜饭",
      vi: "Cơm thịt nguội Jinhua với cải thìa",
      ms: "Nasi Ham Jinhua & Pak Choy"
    },
    description: {
      en: "Minced pork, cured pork, white pepper, fish sauce, wasabi, soy sauce, baker, crispy chili oil, soy nigges, lian bills, garlic, shallot"
    },
    price: 38,
    allergens: ['fish', 'soy', 'gluten'],
    dietary: ['contains meat'],
    preferences: ['no raw garlic', 'no spicy', 'no pork'],
    image: "Jinhua ham & Bok Choy Rice 金苹果果酱.jpg"
  },
  {
    id: 12,
    category: 'Mains',
    name: {
      en: "Buckwheat Fried Chicken",
      zh: "荞麦炸鸡",
      vi: "Gà rán kiều mạch",
      ms: "Ayam Goreng Buckwheat"
    },
    description: {
      en: "Buckwheat fried chicken thighs & drums, tail bask"
    },
    price: 42,
    allergens: ['gluten'],
    dietary: ['contains meat'],
    preferences: ['not too fatty']
  },
  {
    id: 13,
    category: 'Mains',
    name: {
      en: "Pork Ribs with Pineapple Glaze",
      zh: "菠萝釉猪排",
      vi: "Sườn heo nướng sốt dứa",
      ms: "Rusuk Babi dengan Sos Nanas"
    },
    description: {
      en: "Ribs, pineapple & ketchup glaze, spiced rub, tamarind & chili dip"
    },
    price: 55,
    dietary: ['contains meat'],
    preferences: ['no spicy', 'no pork']
  },
  {
    id: 14,
    category: 'Large/Sharing',
    name: {
      en: "Roast Tilapia with Harissa",
      zh: "哈里萨烤罗非鱼",
      vi: "Cá rô phi nướng sốt Harissa",
      ms: "Ikan Tilapia Panggang dengan Harissa"
    },
    description: {
      en: "Tilapia/red snapper, harissa paste, pickled onion, ulam & micro herbs (marigold), calamansi, curry leaf oil"
    },
    price: 68,
    allergens: ['fish'],
    dietary: ['pescatarian'],
    preferences: ['no raw onion', 'no spicy'],
    pax: "2-3"
  },
  {
    id: 15,
    category: 'Large/Sharing',
    name: {
      en: "Papillote Red Snapper Fillet",
      zh: "法式纸烤红鲷鱼",
      vi: "Cá hồng phi lê nướng giấy kiểu Pháp",
      ms: "Ikan Merah Papillote"
    },
    description: {
      en: "Red snapper, Shao Xing wine-butter sauce (pickle daikon, kuchai, red onion)"
    },
    price: 75,
    allergens: ['fish', 'dairy', 'alcohol'],
    dietary: ['pescatarian'],
    preferences: ['no raw onion', 'no alcohol'],
    pax: "2-3",
    image: "Papillote red snapper-fillet w Shao Xing beurre blanc 法式纸烤红色.jpg"
  },
  {
    id: 16,
    category: 'Large/Sharing',
    name: {
      en: "Angus Flank Steak with Charred Vegetables",
      zh: "安格斯牛腹肉配炭烤蔬菜",
      vi: "Thăn bò Angus với rau củ nướng",
      ms: "Steak Angus dengan Sayuran Panggang"
    },
    description: {
      en: "Red snapper, Shao Xing wine-baby kailan, butter sauce"
    },
    price: 88,
    allergens: ['dairy'],
    dietary: ['contains meat'],
    preferences: ['no beef', 'no alcohol'],
    pax: "2-3"
  },
  {
    id: 17,
    category: 'Large/Sharing',
    name: {
      en: "Pork Chop with Charred Vegetables",
      zh: "炭烤猪排配蔬菜",
      vi: "Sườn heo với rau củ nướng",
      ms: "Potongan Babi dengan Sayuran Panggang"
    },
    description: {
      en: "Grilled pork chop, chimichurri, dijon mustard, charred kailan & cabbage"
    },
    price: 78,
    allergens: ['mustard'],
    dietary: ['contains meat'],
    preferences: ['no pork'],
    pax: "2-3"
  }
];