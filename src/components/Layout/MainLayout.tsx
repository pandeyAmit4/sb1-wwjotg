import React, { useState } from 'react';
import { Navbar } from '../Navigation/Navbar';
import { Sidebar } from '../Navigation/Sidebar';
import { useSearch } from '../../contexts/SearchContext';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { clearSearch } = useSearch();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isMenuOpen) setIsMenuOpen(false);
    if (!isSearchOpen) clearSearch();
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="backdrop-blur-sm bg-black/40 min-h-screen">
        <Navbar 
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          isSearchOpen={isSearchOpen}
          toggleSearch={toggleSearch}
        />
        <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        <main className="pt-16 lg:ml-64">
          <div className="px-4 sm:px-6 lg:px-8 py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}