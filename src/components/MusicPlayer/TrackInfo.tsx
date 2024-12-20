import React from 'react';
import { Track } from '../../types/track';

interface TrackInfoProps {
  track: Track;
}

export function TrackInfo({ track }: TrackInfoProps) {
  return (
    <div className="flex items-center gap-4">
      <img 
        src={track.image} 
        alt={track.title} 
        className="w-14 h-14 rounded object-cover"
      />
      <div>
        <h3 className="font-medium">{track.title}</h3>
        <p className="text-sm text-gray-400">{track.artist_name}</p>
      </div>
    </div>
  );
}