import { useState } from 'react';
import { Scale, Menu, X, Search } from 'lucide-react';

interface HeaderProps {
  onSearchClick: () => void;
}

export default function Header({ onSearchClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Scale className="w-8 h-8 text-amber-700" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Av. Cemil Çiçek</h1>
              <p className="text-sm text-gray-600">Hukuk Danışmanlık</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-amber-700 transition-colors font-medium">
              Anasayfa
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-700 transition-colors font-medium">
              Hakkında
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-amber-700 transition-colors font-medium">
              Hizmetler
            </button>
            <button onClick={() => scrollToSection('press')} className="text-gray-700 hover:text-amber-700 transition-colors font-medium">
              Basın
            </button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-amber-700 transition-colors font-medium">
              Blog
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-700 transition-colors font-medium">
              İletişim
            </button>
            <button
              onClick={onSearchClick}
              className="p-2 text-gray-700 hover:text-amber-700 transition-colors"
              aria-label="Arama"
            >
              <Search className="w-5 h-5" />
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-amber-700 transition-colors"
            aria-label="Menü"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-700 transition-colors font-medium">
              Anasayfa
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-700 transition-colors font-medium">
              Hakkında
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-700 transition-colors font-medium">
              Hizmetler
            </button>
            <button onClick={() => scrollToSection('press')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-700 transition-colors font-medium">
              Basın
            </button>
            <button onClick={() => scrollToSection('blog')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-700 transition-colors font-medium">
              Blog
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-700 transition-colors font-medium">
              İletişim
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onSearchClick();
              }}
              className="flex items-center space-x-2 w-full py-2 text-gray-700 hover:text-amber-700 transition-colors font-medium"
            >
              <Search className="w-5 h-5" />
              <span>Arama</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
