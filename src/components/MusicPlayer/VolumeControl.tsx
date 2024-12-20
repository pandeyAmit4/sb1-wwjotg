import React from 'react';
import { Volume2 } from 'lucide-react';

export function VolumeControl() {
  return (
    <div className="flex items-center gap-2">
      <Volume2 size={20} />
      <div className="w-24 bg-gray-600/50 rounded-full h-1">
        <div className="bg-white w-2/3 h-full rounded-full"></div>
      </div>
    </div>
  );
}