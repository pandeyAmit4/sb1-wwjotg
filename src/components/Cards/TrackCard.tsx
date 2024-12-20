import React from 'react';
import { Track } from '../../types/track';
import { formatDuration } from '../../utils/formatters';

interface TrackCardProps {
  track: Track;
  onClick: () => void;
  layout?: 'grid' | 'list';
}

export function TrackCard({ track, onClick, layout = 'grid' }: TrackCardProps) {
  if (layout === 'list') {
    return (
      <div
        onClick={onClick}
        className="backdrop-blur-md bg-white/10 p-4 rounded-lg hover:bg-white/20 
                 transition-all duration-300 cursor-pointer
                 transform hover:scale-[1.01] hover:shadow-xl
                 flex items-center gap-4"
      >
        <img
          src={track.image}
          alt={track.title}
          className="w-16 h-16 rounded-lg object-cover"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-medium truncate">{track.title}</h3>
          <p className="text-sm text-gray-400 truncate">{track.artist_name}</p>
        </div>
        <div className="text-sm text-gray-400">
          {formatDuration(track.duration)}
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className="backdrop-blur-md bg-white/10 p-4 rounded-lg hover:bg-white/20 
               transition-all duration-300 cursor-pointer
               transform hover:scale-[1.01] hover:shadow-xl"
    >
      <img
        src={track.image}
        alt={track.title}
        className="w-full aspect-square rounded-lg object-cover mb-4"
      />
      <h3 className="font-medium truncate">{track.title}</h3>
      <p className="text-sm text-gray-400 truncate">{track.artist_name}</p>
    </div>
  );
}