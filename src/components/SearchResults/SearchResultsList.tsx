import React from 'react';
import { Track } from '../../types/track';
import { formatDuration } from '../../utils/formatters';

interface SearchResultsListProps {
  tracks: Track[];
  onSelect: (track: Track) => void;
  currentPage: number;
  itemsPerPage: number;
}

export function SearchResultsList({ tracks, onSelect, currentPage, itemsPerPage }: SearchResultsListProps) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedTracks = tracks.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="space-y-2">
      {displayedTracks.map((track) => (
        <div
          key={track.id}
          onClick={() => onSelect(track)}
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/10 
                   transition-colors duration-200 cursor-pointer group"
        >
          <img
            src={track.image}
            alt={track.title}
            className="w-12 h-12 rounded object-cover group-hover:shadow-lg transition-shadow duration-200"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-medium truncate">{track.title}</h3>
            <p className="text-sm text-gray-400 truncate">{track.artist_name}</p>
          </div>
          <div className="text-sm text-gray-400 hidden sm:block">
            {formatDuration(track.duration)}
          </div>
        </div>
      ))}
    </div>
  );
}