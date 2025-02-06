import React from 'react';
import { MenuItem } from '../../types/menu';
import { icons, dietaryFilters } from '../../constants/menu';

interface MenuListProps {
  items: MenuItem[];
  language: string;
  activeFilters: string[];
}

const MenuList: React.FC<MenuListProps> = ({ items, language, activeFilters }) => {
  const filterItems = (items: MenuItem[]) => {
    return items.filter(item => {
      if (activeFilters.includes('vegetarian') && !item.dietary?.includes('vegetarian')) return false;
      if (activeFilters.includes('vegan') && !item.dietary?.includes('vegan')) return false;
      if (activeFilters.includes('glutenFree') && item.allergens?.includes('gluten')) return false;
      if (activeFilters.includes('dairyFree') && item.allergens?.includes('dairy')) return false;
      if (activeFilters.includes('nutFree') && item.allergens?.includes('nuts')) return false;
      if (activeFilters.includes('noSpicy') && item.isSpicy) return false;
      return true;
    });
  };

  const renderIcons = (item: MenuItem) => (
    <div className="flex flex-wrap gap-2 mt-2">
      {item.allergens?.map((allergen, idx) => (
        <span key={idx} className="text-xs bg-red-50 text-red-800 px-2 py-1 rounded">
          Contains: {allergen}
        </span>
      ))}
      {item.dietary?.map((diet, idx) => (
        <span key={idx} className="text-xs bg-green-50 text-green-800 px-2 py-1 rounded">
          {diet}
        </span>
      ))}
      {item.isSpicy && (
        <span className="text-xs bg-orange-50 text-orange-800 px-2 py-1 rounded">
          {icons.spicy} Spicy
        </span>
      )}
      {item.isPopular && (
        <span className="text-xs bg-yellow-50 text-yellow-800 px-2 py-1 rounded">
          {icons.popular} Popular
        </span>
      )}
    </div>
  );

  return (
    <div className="flex-1 overflow-auto">
      {filterItems(items).map((item) => (
        <div key={item.id} className="p-4 border-b">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h2 className="text-lg font-medium">
                {item.name[language as keyof typeof item.name] || item.name.en}
              </h2>
              {item.description && (
                <p className="text-gray-600 text-sm mt-1 italic">
                  {item.description[language as keyof typeof item.description] || item.description.en}
                </p>
              )}
              {renderIcons(item)}
            </div>
            <div className="text-right ml-4">
              <span className="font-medium">RM {item.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuList;