import React from 'react';
import { Clock } from 'lucide-react';
import { Track } from '../../types/track';
import { formatDuration } from '../../utils/formatters';

interface TrackRowProps {
  track: Track;
  index: number;
  onClick: () => void;
}

export function TrackRow({ track, index, onClick }: TrackRowProps) {
  return (
    <div
      onClick={onClick}
      className="group flex items-center gap-4 p-3 rounded-lg hover:bg-white/10 
                transition-all duration-200 cursor-pointer"
    >
      <div className="w-8 text-sm text-gray-400">{index + 1}</div>
      <img
        src={track.image}
        alt={track.title}
        className="w-12 h-12 rounded object-cover"
      />
      <div className="flex-1 min-w-0">
        <h3 className="font-medium truncate">{track.title}</h3>
        <p className="text-sm text-gray-400 truncate">{track.artist_name}</p>
      </div>
      <div className="hidden sm:block text-sm text-gray-400">
        {track.album || 'Unknown Album'}
      </div>
      <div className="hidden md:block text-sm text-gray-400">
        {track.year || 'Unknown Year'}
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-400">
        <Clock size={14} />
        {formatDuration(track.duration)}
      </div>
    </div>
  );
}