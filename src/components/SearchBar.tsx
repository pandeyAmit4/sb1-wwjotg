import React from 'react';
import { Search } from 'lucide-react';
import { useSearch } from '../contexts/SearchContext';

export function SearchBar() {
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <div className="relative max-w-2xl mx-auto">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for music..."
        className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-md rounded-full 
                 text-white placeholder-gray-400 
                 focus:outline-none focus:ring-2 focus:ring-green-500
                 border border-white/10 hover:border-white/20
                 transition-all duration-300"
      />
    </div>
  );
}