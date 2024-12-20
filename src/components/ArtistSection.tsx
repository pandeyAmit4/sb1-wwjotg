import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const initialArtists = [
  {
    id: '1',
    name: 'Electronic Waves',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80',
    genre: 'Electronic'
  },
  {
    id: '2',
    name: 'Jazz Ensemble',
    image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=800&q=80',
    genre: 'Jazz'
  },
  {
    id: '3',
    name: 'Acoustic Harmony',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
    genre: 'Acoustic'
  },
  {
    id: '4',
    name: 'Urban Beats',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    genre: 'Hip Hop'
  }
];

const moreArtists = [
  {
    id: '5',
    name: 'Classical Symphony',
    image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80',
    genre: 'Classical'
  },
  {
    id: '6',
    name: 'Rock Legends',
    image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=800&q=80',
    genre: 'Rock'
  },
  {
    id: '7',
    name: 'Soul Sisters',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80',
    genre: 'Soul'
  },
  {
    id: '8',
    name: 'Folk Travelers',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80',
    genre: 'Folk'
  }
];

export function ArtistSection() {
  const [artists, setArtists] = useState(initialArtists);
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  const handleShowMore = () => {
    setArtists([...artists, ...moreArtists]);
    setShowMore(true);
  };

  const handleArtistClick = (artistId: string) => {
    navigate(`/artist/${artistId}`);
  };

  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl sm:text-2xl font-bold">Featured Artists</h2>
        {!showMore && (
          <button
            onClick={handleShowMore}
            className="flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors duration-200"
          >
            See More
            <ChevronRight size={20} />
          </button>
        )}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {artists.map((artist) => (
          <div
            key={artist.id}
            onClick={() => handleArtistClick(artist.id)}
            className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
          >
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-base sm:text-lg font-bold text-white">{artist.name}</h3>
                <p className="text-sm text-gray-300">{artist.genre}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}