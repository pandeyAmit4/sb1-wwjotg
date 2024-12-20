import { useState, useEffect } from 'react';
import { Track } from '../types';
import { useCategories } from './useCategories';
import { fetchCategoryTracks, APIError } from '../utils/api';

export function useCategory(categoryId: string | undefined) {
  const { categories } = useCategories();
  const [category, setCategory] = useState(categories.find(c => c.id === categoryId));
  const [tracks, setTracks] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!categoryId) return;

    const loadCategoryTracks = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const tracks = await fetchCategoryTracks(categoryId);
        setTracks(tracks);
      } catch (err) {
        const errorMessage = err instanceof APIError 
          ? err.message 
          : 'Failed to load category tracks';
        setError(errorMessage);
        console.error('Category API Error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadCategoryTracks();
  }, [categoryId]);

  return { category, tracks, isLoading, error };
}