import React from 'react';
import { useParams } from 'react-router-dom';
import { Loader2, Music } from 'lucide-react';
import { useArtist } from '../hooks/useArtist';
import { usePlayer } from '../contexts/PlayerContext';

export function ArtistPage() {
  const { id } = useParams();
  const { artist, tracks, isLoading, error } = useArtist(id);
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
      <div className="relative h-64 rounded-xl overflow-hidden">
        <img
          src={artist?.image || 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=1920&q=80'}
          alt={artist?.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
          <h1 className="text-4xl font-bold mb-2">{artist?.name}</h1>
          {artist?.genre && <p className="text-gray-300">{artist.genre}</p>}
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Music size={24} />
          Popular Tracks
        </h2>
        <div className="grid gap-4">
          {tracks.map((track) => (
            <div
              key={track.id}
              onClick={() => setCurrentTrack(track)}
              className="backdrop-blur-md bg-white/10 p-4 rounded-lg hover:bg-white/20 
                       transition-all duration-300 cursor-pointer
                       transform hover:scale-[1.01] hover:shadow-xl
                       flex items-center gap-4"
            >
              <img
                src={track.image}
                alt={track.title}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-medium">{track.title}</h3>
                <p className="text-sm text-gray-400">{track.artist_name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}