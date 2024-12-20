import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MainLayout } from './components/Layout/MainLayout';
import { AppRoutes } from './routes';
import { SearchProvider } from './contexts/SearchContext';
import { PlayerProvider } from './contexts/PlayerContext';
import { MusicPlayer } from './components/MusicPlayer';

function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <PlayerProvider>
          <MainLayout>
            <AppRoutes />
          </MainLayout>
          <MusicPlayer />
        </PlayerProvider>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;