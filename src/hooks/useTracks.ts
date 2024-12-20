import { useState, useEffect } from 'react';
import { Track, JamendoTrack } from '../types';

const JAMENDO_CLIENT_ID = '2c63374f';
const JAMENDO_API_URL = 'https://api.jamendo.com/v3.0';

export function useTracks(searchQuery: string) {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTracks = async () => {
      if (!searchQuery.trim() && tracks.length > 0) return;
      
      setIsLoading(true);
      setError(null);
      
      try {
        const params = new URLSearchParams({
          client_id: JAMENDO_CLIENT_ID,
          format: 'jsonpretty',
          limit: '20',
          include: 'musicinfo',
          namesearch: searchQuery || 'ambient',
        });

        const response = await fetch(
          `${JAMENDO_API_URL}/tracks?${params.toString()}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch tracks');
        }

        const data = await response.json();
        
        // Map Jamendo's response to our Track interface
        const mappedTracks: Track[] = data.results.map((track: JamendoTrack) => ({
          id: track.id,
          title: track.name,
          artist_name: track.artist_name,
          duration: Math.floor(track.duration),
          image: track.image,
          audio: track.audiodownload_allowed ? track.audiodownload : track.audio
        }));

        setTracks(mappedTracks);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('API Error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    // Debounce the search
    const timeoutId = setTimeout(fetchTracks, 500);
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return { tracks, isLoading, error };
}