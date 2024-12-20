import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ArtistPage } from './pages/ArtistPage';
import { CategoryPage } from './pages/CategoryPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/artist/:id" element={<ArtistPage />} />
      <Route path="/category/:id" element={<CategoryPage />} />
    </Routes>
  );
}