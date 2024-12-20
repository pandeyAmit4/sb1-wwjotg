import React from 'react';
import { usePlayer } from '../../contexts/PlayerContext';
import { Controls } from './Controls';
import { TrackInfo } from './TrackInfo';
import { VolumeControl } from './VolumeControl';
import { ProgressBar } from './ProgressBar';

export function MusicPlayer() {
  const { currentTrack, isPlaying, togglePlayPause } = usePlayer();

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 backdrop-blur-md bg-black/60 border-t border-gray-700/50 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <TrackInfo track={currentTrack} />
        
        <div className="flex flex-col items-center gap-2">
          <Controls isPlaying={isPlaying} onPlayPause={togglePlayPause} />
          <ProgressBar />
        </div>

        <VolumeControl />
      </div>
    </div>
  );
}