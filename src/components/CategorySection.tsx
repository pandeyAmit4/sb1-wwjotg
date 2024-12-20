import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCategories } from '../hooks/useCategories';
import { CategoryCard } from './Cards/CategoryCard';

export function CategorySection() {
  const { categories, isLoading } = useCategories();
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading categories...</div>;
  }

  return (
    <section className="mb-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Browse Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
          />
        ))}
      </div>
    </section>
  );
}