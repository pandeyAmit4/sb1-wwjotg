import React, { useState } from 'react';
import { Music, Loader2 } from 'lucide-react';
import { Track } from '../../types/track';
import { SearchResultsList } from './SearchResultsList';
import { Pagination } from './Pagination';

interface SearchResultsProps {
  tracks: Track[];
  isLoading: boolean;
  onSelect: (track: Track) => void;
}

const ITEMS_PER_PAGE = 10;

export function SearchResults({ tracks, isLoading, onSelect }: SearchResultsProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(tracks.length / ITEMS_PER_PAGE);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="animate-spin text-green-500" size={32} />
      </div>
    );
  }

  if (tracks.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400">
        No results found. Try a different search term.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Music size={24} className="text-green-500" />
        <h2 className="text-xl font-semibold">Search Results</h2>
        <span className="text-sm text-gray-400">({tracks.length} tracks)</span>
      </div>

      <SearchResultsList
        tracks={tracks}
        onSelect={onSelect}
        currentPage={currentPage}
        itemsPerPage={ITEMS_PER_PAGE}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}