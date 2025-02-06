import React from 'react';
import { Globe } from 'lucide-react';
import { Language } from '../../types/menu';
import { languages } from '../../constants/menu';

interface HeaderProps {
  currentLanguage: string;
  onLanguageChange: (code: string) => void;
  showLanguageSelect: boolean;
  onToggleLanguageSelect: () => void;
}

const Header: React.FC<HeaderProps> = ({
  currentLanguage,
  onLanguageChange,
  showLanguageSelect,
  onToggleLanguageSelect
}) => {
  return (
    <>
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-serif">TABLE & APRON</h1>
          <button
            onClick={onToggleLanguageSelect}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            aria-label="Change language"
          >
            <Globe size={20} />
          </button>
        </div>
      </div>

      {/* Language Selection Modal */}
      {showLanguageSelect && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div 
            className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Select Language</h3>
              <button
                onClick={onToggleLanguageSelect}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                aria-label="Close language selection"
              >
                ✕
              </button>
            </div>
            
            <div className="grid grid-cols-1 gap-2">
              {languages.map((lang: Language) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    onLanguageChange(lang.code);
                    onToggleLanguageSelect();
                  }}
                  className={`p-3 rounded-lg text-left flex items-center justify-between transition-colors duration-200 ${
                    currentLanguage === lang.code
                      ? 'bg-red-50 text-red-800'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="font-medium">{lang.nativeName}</span>
                  <span className="text-sm text-gray-500">({lang.name})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Optional: Announcement Banner */}
      <div className="bg-red-50 text-red-800 px-4 py-2 text-sm text-center">
        Welcome to our digital menu. Browse dishes, check ingredients, and ask questions!
      </div>
    </>
  );
};

export default Header;
