import { useState, useEffect } from 'react';
import { Track } from '../types/track';
import { fetchArtistDetails } from '../services/api/musicbrainz';
import { APIError } from '../services/api/errors';
import { transformToTracks } from '../utils/transforms';

interface Artist {
  id: string;
  name: string;
  genre?: string;
  image?: string;
}

export function useArtist(artistId: string | undefined) {
  const [artist, setArtist] = useState<Artist | null>(null);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!artistId?.trim()) {
      setError('Invalid artist ID');
      setIsLoading(false);
      return;
    }

    const fetchArtistData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchArtistDetails(artistId);
        
        setArtist({
          id: data.id,
          name: data.name,
          genre: data.genres?.[0]?.name,
          image: data.relations?.find(rel => rel.type === 'image')?.url?.resource ||
                'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=1920&q=80'
        });

        if (data.recordings) {
          setTracks(transformToTracks(data.recordings.slice(0, 20)));
        }
      } catch (err) {
        const errorMessage = err instanceof APIError 
          ? err.message 
          : 'Failed to load artist data';
        setError(errorMessage);
        console.error('Artist API Error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArtistData();
  }, [artistId]);

  return { artist, tracks, isLoading, error };
}