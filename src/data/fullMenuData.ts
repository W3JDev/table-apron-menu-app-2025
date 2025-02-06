import { menuItems } from './menuItems';
import { menuItemsSecondBatch } from './menuItemsBatch2';
import { menuItemsFinal, wineList } from './menuItemsFinal';

export const fullMenuItems = [
  ...menuItems,
  ...menuItemsSecondBatch,
  ...menuItemsFinal
];

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

export const wineCategories = [
  'House Pour - White',
  'House Pour - Red',
  'Sparkling',
  'White',
  'Red'
];

export { wineList };

export * from './menuItems';  // Export types