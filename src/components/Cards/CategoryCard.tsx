import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Category } from '../../types/category';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/category/${category.id}`)}
      className="relative overflow-hidden rounded-xl aspect-square sm:aspect-[3/2] cursor-pointer group"
    >
      <img
        src={category.image}
        alt={category.name}
        className="absolute inset-0 w-full h-full object-cover transform 
                 group-hover:scale-110 transition-transform duration-500"
      />
      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} 
                    opacity-60 group-hover:opacity-70 transition-opacity duration-300`} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center drop-shadow-lg 
                      transform group-hover:scale-110 transition-transform duration-300">
            {category.name}
          </h3>
          <p className="text-sm text-white/80 mt-2">
            {category.count.toLocaleString()} tracks
          </p>
        </div>
      </div>
    </div>
  );
}