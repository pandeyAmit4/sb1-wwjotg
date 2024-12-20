import React, { useState } from 'react';
import { Home, Library, PlusCircle, Heart, Menu, X } from 'lucide-react';
import { useSearch } from '../contexts/SearchContext';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { clearSearch } = useSearch();

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    clearSearch();
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed lg:hidden top-4 right-4 z-50 p-2 rounded-full bg-black/50 backdrop-blur-lg text-white hover:bg-black/70 transition-colors duration-200"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside 
        className={`
          fixed lg:fixed inset-y-0 left-0 z-50 
          w-64 backdrop-blur-md bg-black/80
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <nav className="h-full p-6">
          <div className="h-14" />
          <ul className="space-y-4">
            <li>
              <a 
                href="#" 
                className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-200"
                onClick={handleHomeClick}
              >
                <Home size={24} />
                Home
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <Library size={24} />
                Your Library
              </a>
            </li>
          </ul>

          <div className="mt-8">
            <ul className="space-y-4">
              <li>
                <a 
                  href="#" 
                  className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <PlusCircle size={24} />
                  Create Playlist
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <Heart size={24} />
                  Liked Songs
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Backdrop overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}