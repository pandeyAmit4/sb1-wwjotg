import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Library, PlusCircle, Heart, X } from 'lucide-react';
import { useSearch } from '../../contexts/SearchContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigate = useNavigate();
  const { clearSearch } = useSearch();

  const handleHomeClick = () => {
    navigate('/');
    clearSearch();
    onClose();
  };

  return (
    <>
      <aside 
        className={`
          fixed inset-y-0 left-0 z-50 
          w-64 backdrop-blur-md bg-black/80
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <nav className="h-full p-6">
          <div className="h-14" />
          <ul className="space-y-4">
            <li>
              <button 
                onClick={handleHomeClick}
                className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-200 w-full text-left"
              >
                <Home size={24} />
                Home
              </button>
            </li>
            <li>
              <button 
                className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-200 w-full text-left"
                onClick={onClose}
              >
                <Library size={24} />
                Your Library
              </button>
            </li>
          </ul>

          <div className="mt-8">
            <ul className="space-y-4">
              <li>
                <button 
                  className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-200 w-full text-left"
                  onClick={onClose}
                >
                  <PlusCircle size={24} />
                  Create Playlist
                </button>
              </li>
              <li>
                <button 
                  className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-200 w-full text-left"
                  onClick={onClose}
                >
                  <Heart size={24} />
                  Liked Songs
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
    </>
  );
}