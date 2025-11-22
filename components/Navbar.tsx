import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X, CreditCard, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-black/5 dark:border-white/10 py-4 shadow-sm'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer group">
          <div className="p-2 bg-orange-600/10 dark:bg-orange-600/20 rounded-lg border border-orange-500/30 group-hover:border-orange-500/60 transition-colors">
             <CreditCard className="w-6 h-6 text-orange-600 dark:text-orange-500" />
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tighter text-gray-900 dark:text-white font-[Space_Grotesk]">
            Indusind <span className="text-orange-600 dark:text-orange-500">Bank</span>
          </span>
        </div>

        {/* Desktop Nav - Visible on Laptop (lg) and larger */}
        <div className="hidden lg:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-white transition-colors tracking-wide uppercase"
            >
              {item.label}
            </a>
          ))}
          
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-gray-300"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button className="px-6 py-2 text-sm font-bold uppercase tracking-wider bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors rounded-sm shadow-lg">
            Login
          </button>
        </div>

        {/* Mobile/Tablet Toggle - Visible on smaller than lg */}
        <div className="lg:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="p-2 text-gray-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-full"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-900 dark:text-white p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-black/95 border-b border-black/5 dark:border-white/10 backdrop-blur-xl transition-colors shadow-2xl">
          <div className="flex flex-col p-6 space-y-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-medium text-gray-800 dark:text-gray-300 hover:text-orange-600 dark:hover:text-white border-b border-gray-100 dark:border-white/5 pb-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full py-4 mt-4 text-center font-bold uppercase bg-orange-600 text-white rounded-sm shadow-lg hover:bg-orange-700 transition-colors">
              Client Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;