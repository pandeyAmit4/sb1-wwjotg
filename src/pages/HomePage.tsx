import React from 'react';
import { ArtistSection } from '../components/ArtistSection';
import { CategorySection } from '../components/CategorySection';
import { SearchResults } from '../components/SearchResults';
import { useSearch } from '../contexts/SearchContext';
import { useMusicBrainz } from '../hooks/useMusicBrainz';

export function HomePage() {
  const { searchQuery } = useSearch();
  const { tracks, artists, albums, isLoading } = useMusicBrainz(searchQuery);

  const handleSelect = (item: any, type: 'artist' | 'album' | 'track') => {
    if (type === 'artist') {
      // Handle artist selection
    } else if (type === 'album') {
      // Handle album selection
    } else {
      // Handle track selection
    }
  };

  if (searchQuery) {
    return (
      <SearchResults
        tracks={tracks}
        artists={artists}
        albums={albums}
        onSelect={handleSelect}
        isLoading={isLoading}
      />
    );
  }

  return (
    <div className="space-y-8">
      <ArtistSection />
      <CategorySection />
    </div>
  );
}