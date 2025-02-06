import React, { useState } from 'react';
import { Globe, Send, Filter } from 'lucide-react';
import { fullMenuItems, categories } from '../data/fullMenuData';
import type { MenuItem, Language, DietaryFilter } from '../types/menu';

const dietaryFilters: DietaryFilter[] = [
  { id: 'vegetarian', label: 'Vegetarian', icon: '🥬' },
  { id: 'vegan', label: 'Vegan', icon: '🌱' },
  { id: 'pescatarian', label: 'Pescatarian', icon: '🐟' },
  { id: 'halal', label: 'Halal', icon: '☪️' },
  { id: 'glutenFree', label: 'Gluten Free', icon: '🌾' },
  { id: 'dairyFree', label: 'Dairy Free', icon: '🥛' },
  { id: 'noSpicy', label: 'No Spicy', icon: '🌶️' }
];

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt' },
  { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu' }
];

const MenuApp = () => {
  const [language, setLanguage] = useState('en');
  const [showLanguageSelect, setShowLanguageSelect] = useState(false);
  const [filters, setFilters] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toggleFilter = (filterId: string) => {
    setFilters(prev => 
      prev.includes(filterId)
        ? prev.filter(f => f !== filterId)
        : [...prev, filterId]
    );
  };

  const filterMenuItems = (): MenuItem[] => {
    let filteredItems = fullMenuItems;
    
    // Category filter
    if (selectedCategory !== 'all') {
      filteredItems = filteredItems.filter(item => item.category === selectedCategory);
    }

    // Dietary and preference filters
    if (filters.length > 0) {
      filteredItems = filteredItems.filter(item => {
        if (filters.includes('vegetarian') && !item.dietary?.includes('vegetarian')) return false;
        if (filters.includes('vegan') && !item.dietary?.includes('vegan')) return false;
        if (filters.includes('pescatarian') && !item.dietary?.includes('pescatarian')) return false;
        if (filters.includes('glutenFree') && item.allergens?.includes('gluten')) return false;
        if (filters.includes('dairyFree') && item.allergens?.includes('dairy')) return false;
        if (filters.includes('noSpicy') && item.preferences?.includes('spicy')) return false;
        return true;
      });
    }

    return filteredItems;
  };

  const renderMenuItem = (item: MenuItem) => (
    <div key={item.id} className="mb-6 pb-4 border-b">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="font-medium">
            {item.name[language as keyof typeof item.name] || item.name.en}
          </h3>
          {item.description && (
            <p className="text-sm text-gray-600 mt-1 italic">
              {item.description[language as keyof typeof item.description] || item.description.en}
            </p>
          )}
          <div className="mt-2 flex flex-wrap gap-2">
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
            {item.pax && (
              <span className="text-xs bg-blue-50 text-blue-800 px-2 py-1 rounded">
                {item.pax} pax
              </span>
            )}
            {item.isPopular && (
              <span className="text-xs bg-yellow-50 text-yellow-800 px-2 py-1 rounded">
                ⭐ Popular
              </span>
            )}
          </div>
        </div>
        <div className="text-right ml-4">
          <span className="font-medium">RM {item.price}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="p-4 border-b bg-white sticky top-0 z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-serif">TABLE & APRON</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <Filter size={20} />
            </button>
            <button 
              onClick={() => setShowLanguageSelect(!showLanguageSelect)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <Globe size={20} />
            </button>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="mt-4 flex overflow-x-auto pb-2 gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'bg-red-800 text-white'
                : 'bg-gray-100'
            }`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-red-800 text-white'
                  : 'bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Language Selector Modal */}
      {showLanguageSelect && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Select Language</h3>
              <button 
                onClick={() => setShowLanguageSelect(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setShowLanguageSelect(false);
                  }}
                  className={`p-3 rounded-lg text-left flex items-center justify-between ${
                    language === lang.code 
                      ? 'bg-red-50 text-red-800' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <span>{lang.nativeName}</span>
                  <span className="text-sm text-gray-500">({lang.name})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Filters */}
      {showFilters && (
        <div className="bg-white p-4 border-b">
          <div className="flex flex-wrap gap-2">
            {dietaryFilters.map(filter => (
              <button
                key={filter.id}
                onClick={() => toggleFilter(filter.id)}
                className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 ${
                  filters.includes(filter.id)
                    ? 'bg-red-800 text-white'
                    : 'bg-gray-100'
                }`}
              >
                {filter.icon} {filter.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Menu Items */}
      <div className="flex-1 overflow-auto px-4 py-2">
        {filterMenuItems().map(renderMenuItem)}
      </div>
    </div>
  );
};

export default MenuApp;