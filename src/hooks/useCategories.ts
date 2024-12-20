import { useState, useEffect } from 'react';

export interface Category {
  id: string;
  name: string;
  count: number;
  color: string;
  image: string;
}

// Predefined categories with known data to ensure reliability
const defaultCategories: Category[] = [
  {
    id: 'electronic',
    name: 'Electronic',
    count: 15420,
    color: 'from-purple-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80'
  },
  {
    id: 'jazz',
    name: 'Jazz',
    count: 12350,
    color: 'from-blue-500 to-teal-500',
    image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=800&q=80'
  },
  {
    id: 'classical',
    name: 'Classical',
    count: 18670,
    color: 'from-amber-500 to-red-500',
    image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80'
  },
  {
    id: 'rock',
    name: 'Rock',
    count: 25840,
    color: 'from-red-500 to-orange-500',
    image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=800&q=80'
  },
  {
    id: 'hip-hop',
    name: 'Hip Hop',
    count: 9870,
    color: 'from-green-500 to-emerald-500',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80'
  },
  {
    id: 'soul',
    name: 'Soul',
    count: 7650,
    color: 'from-violet-500 to-purple-500',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80'
  },
  {
    id: 'folk',
    name: 'Folk',
    count: 6340,
    color: 'from-yellow-500 to-orange-500',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80'
  },
  {
    id: 'indie',
    name: 'Indie',
    count: 8920,
    color: 'from-cyan-500 to-blue-500',
    image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&q=80'
  }
];

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>(defaultCategories);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Start with default categories immediately
    setCategories(defaultCategories);
    setIsLoading(false);
    setError(null);
  }, []);

  return { categories, isLoading, error };
}