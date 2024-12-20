import React from 'react';
import { Clock } from 'lucide-react';

export function TrackListHeader() {
  return (
    <div className="flex items-center gap-4 px-3 py-2 text-sm text-gray-400 border-b border-gray-700/50">
      <div className="w-8">#</div>
      <div className="w-12"></div>
      <div className="flex-1">Title</div>
      <div className="hidden sm:block w-32">Album</div>
      <div className="hidden md:block w-24">Year</div>
      <div className="w-20 flex justify-end">
        <Clock size={14} />
      </div>
    </div>
  );
}