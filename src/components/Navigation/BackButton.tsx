import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium
                text-white bg-white/10 rounded-full hover:bg-white/20 
                transition-colors duration-200"
    >
      <ChevronLeft size={20} />
      Back
    </button>
  );
}