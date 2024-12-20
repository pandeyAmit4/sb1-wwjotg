import React from 'react';
import { Menu, Search, X } from 'lucide-react';
import { useSearch } from '../../contexts/SearchContext';

interface NavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  toggleSearch: () => void;
  isSearchOpen: boolean;
}

export function Navbar({ isMenuOpen, toggleMenu, toggleSearch, isSearchOpen }: NavbarProps) {
  const { searchQuery, setSearchQuery, clearSearch } = useSearch();

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md">
      <div className="flex items-center justify-between h-16 px-4 lg:pl-72">
        <button
          onClick={toggleMenu}
          className="p-2 text-white hover:bg-white/10 rounded-full 
                   transition-colors duration-200 lg:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`flex-1 mx-4 transition-all duration-300 ease-in-out 
                      ${isSearchOpen ? 'opacity-100 max-w-2xl' : 'opacity-0 max-w-0'}`}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for music..."
            className="w-full px-4 py-2 bg-white/10 rounded-full text-white 
                     placeholder-gray-400 focus:outline-none focus:ring-2 
                     focus:ring-green-500 border border-white/10"
            style={{ display: isSearchOpen ? 'block' : 'none' }}
          />
        </div>

        {!isSearchOpen && (
          <h1 className="text-xl font-bold text-white">Music Discovery</h1>
        )}

        <button
          onClick={toggleSearch}
          className="p-2 text-white hover:bg-white/10 rounded-full 
                   transition-colors duration-200"
          aria-label={isSearchOpen ? 'Close search' : 'Open search'}
        >
          {isSearchOpen ? <X size={24} /> : <Search size={24} />}
        </button>
      </div>
    </nav>
  );
}