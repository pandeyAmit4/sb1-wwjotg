import React from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2 } from 'lucide-react';
import { usePlayer } from '../contexts/PlayerContext';
import { formatDuration } from '../utils/formatters';

export function MusicPlayer() {
  const { currentTrack, isPlaying, togglePlayPause } = usePlayer();

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 backdrop-blur-md bg-black/60 border-t border-gray-700/50 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img 
            src={currentTrack.image} 
            alt={currentTrack.title} 
            className="w-14 h-14 rounded object-cover"
          />
          <div>
            <h3 className="font-medium">{currentTrack.title}</h3>
            <p className="text-sm text-gray-400">{currentTrack.artist_name}</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <button className="text-gray-400 hover:text-white transition-colors duration-200">
              <SkipBack size={20} />
            </button>
            <button 
              onClick={togglePlayPause}
              className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <button className="text-gray-400 hover:text-white transition-colors duration-200">
              <SkipForward size={20} />
            </button>
          </div>
          <div className="w-96 bg-gray-600/50 rounded-full h-1">
            <div className="bg-white w-1/3 h-full rounded-full"></div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Volume2 size={20} />
          <div className="w-24 bg-gray-600/50 rounded-full h-1">
            <div className="bg-white w-2/3 h-full rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}