import React from 'react';
import { Loader2 } from 'lucide-react';
import { Track } from '../../types/track';
import { TrackListHeader } from './TrackListHeader';
import { TrackRow } from './TrackRow';

interface TrackListProps {
  tracks: Track[];
  isLoading?: boolean;
  error?: string | null;
  onTrackSelect: (track: Track) => void;
}

export function TrackList({ tracks, isLoading, error, onTrackSelect }: TrackListProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="animate-spin text-green-500" size={32} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-400">
        <p>{error}</p>
      </div>
    );
  }

  if (tracks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400">
        No tracks found.
      </div>
    );
  }

  return (
    <div className="backdrop-blur-md bg-black/20 rounded-lg overflow-hidden">
      <TrackListHeader />
      <div className="divide-y divide-gray-700/50">
        {tracks.map((track, index) => (
          <TrackRow
            key={track.id}
            track={track}
            index={index}
            onClick={() => onTrackSelect(track)}
          />
        ))}
      </div>
    </div>
  );
}