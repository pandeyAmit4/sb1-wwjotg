import { useState, useEffect } from 'react';

export function useMusicBrainz(searchQuery: string) {
  const [tracks, setTracks] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!searchQuery.trim()) {
        setTracks([]);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://musicbrainz.org/ws/2/recording?query=${encodeURIComponent(
            searchQuery
          )}&fmt=json&limit=50`,
          {
            headers: {
              'User-Agent': 'MusicDiscoveryApp/1.0.0'
            }
          }
        );

        if (!response.ok) throw new Error('Failed to fetch data');

        const data = await response.json();
        setTracks(data.recordings || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('API Error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    const timeoutId = setTimeout(fetchData, 500);
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return { tracks, isLoading, error };
}