import React from 'react';
import { useParams } from 'react-router-dom';
import { Loader2, Music } from 'lucide-react';
import { useCategory } from '../hooks/useCategory';
import { usePlayer } from '../contexts/PlayerContext';
import { BackButton } from '../components/Navigation/BackButton';
import { TrackCard } from '../components/Cards/TrackCard';

export function CategoryPage() {
  const { id } = useParams();
  const { category, tracks, isLoading, error } = useCategory(id);
  const { setCurrentTrack } = usePlayer();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <Loader2 className="animate-spin text-green-500" size={32} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-400 py-8">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <BackButton />
      
      <div className={`relative h-32 sm:h-48 rounded-xl overflow-hidden ${category?.color}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">
            {category?.name}
          </h1>
        </div>
      </div>

      <section>
        <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2">
          <Music size={24} />
          Top Tracks
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track) => (
            <TrackCard
              key={track.id}
              track={track}
              onClick={() => setCurrentTrack(track)}
              layout="grid"
            />
          ))}
        </div>
      </section>
    </div>
  );
}