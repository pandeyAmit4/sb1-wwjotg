import React from 'react';
import { Clock, Loader2 } from 'lucide-react';
import { Track } from '../types';
import { useSearch } from '../contexts/SearchContext';
import { useTracks } from '../hooks/useTracks';

interface TrackListProps {
  currentTrack: Track | null;
  onTrackSelect: (track: Track) => void;
}

export const TrackList: React.FC<TrackListProps> = ({ currentTrack, onTrackSelect }) => {
  const { searchQuery } = useSearch();
  const { tracks, isLoading, error } = useTracks(searchQuery);

  if (isLoading) {
    return (
      <div className="bg-gray-800/30 rounded-xl p-6 flex items-center justify-center">
        <Loader2 className="animate-spin text-green-500" size={32} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-800/30 rounded-xl p-6 text-center text-red-400">
        <p>{error}</p>
      </div>
    );
  }

  if (tracks.length === 0) {
    return (
      <div className="bg-gray-800/30 rounded-xl p-6 text-center">
        <p className="text-gray-400">No tracks found matching "{searchQuery}"</p>
      </div>
    );
  }

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gray-800/30 rounded-xl p-6">
      <div className="flex items-center text-gray-400 border-b border-gray-700 pb-4 px-4">
        <div className="w-8">#</div>
        <div className="flex-1">Title</div>
        <div className="w-48">Artist</div>
        <div className="w-24 flex justify-end">
          <Clock size={16} />
        </div>
      </div>
      
      <div className="mt-4">
        {tracks.map((track, index) => (
          <div 
            key={track.id}
            onClick={() => onTrackSelect(track)}
            className={`flex items-center px-4 py-3 rounded-lg hover:bg-gray-800/50 cursor-pointer ${
              currentTrack?.id === track.id ? 'bg-gray-800/50' : ''
            }`}
          >
            <div className="w-8 text-gray-400">{index + 1}</div>
            <div className="flex-1 flex items-center gap-4">
              <img 
                src={track.image} 
                alt={track.title}
                className="w-12 h-12 rounded object-cover"
              />
              <span className="font-medium">{track.title}</span>
            </div>
            <div className="w-48 text-gray-400">{track.artist_name}</div>
            <div className="w-24 text-gray-400 text-right">
              {formatDuration(track.duration)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}