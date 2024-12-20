import React from 'react';
import { Play, Pause, SkipForward, SkipBack } from 'lucide-react';

interface ControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
}

export function Controls({ isPlaying, onPlayPause }: ControlsProps) {
  return (
    <div className="flex items-center gap-6">
      <button className="text-gray-400 hover:text-white transition-colors duration-200">
        <SkipBack size={20} />
      </button>
      <button 
        onClick={onPlayPause}
        className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>
      <button className="text-gray-400 hover:text-white transition-colors duration-200">
        <SkipForward size={20} />
      </button>
    </div>
  );
}