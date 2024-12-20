import React from 'react';
import { Music, Disc, User } from 'lucide-react';

interface SearchResultsProps {
  artists: any[];
  albums: any[];
  tracks: any[];
  onSelect: (item: any, type: 'artist' | 'album' | 'track') => void;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  artists = [],
  albums = [],
  tracks = [],
  onSelect
}) => {
  return (
    <div className="space-y-8">
      {tracks?.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Music size={24} />
            Tracks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tracks.map((track) => (
              <div
                key={track.id}
                onClick={() => onSelect(track, 'track')}
                className="backdrop-blur-md bg-white/10 p-4 rounded-lg cursor-pointer hover:bg-white/20 transition-colors duration-300"
              >
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80"
                    alt={track.title}
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{track.title}</h3>
                    <p className="text-sm text-gray-400">
                      {track.artist_credit?.[0]?.name || 'Unknown Artist'}
                    </p>
                    {track.releases?.[0]?.date && (
                      <p className="text-xs text-gray-500 mt-1">
                        Released: {new Date(track.releases[0].date).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {artists?.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <User size={24} />
            Artists
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {artists.map((artist) => (
              <div
                key={artist.id}
                onClick={() => onSelect(artist, 'artist')}
                className="backdrop-blur-md bg-white/10 p-4 rounded-lg cursor-pointer hover:bg-white/20 transition-colors duration-300"
              >
                <h3 className="font-medium">{artist.name}</h3>
                {artist.country && (
                  <p className="text-sm text-gray-400">Country: {artist.country}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {albums?.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Disc size={24} />
            Albums
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {albums.map((album) => (
              <div
                key={album.id}
                onClick={() => onSelect(album, 'album')}
                className="backdrop-blur-md bg-white/10 p-4 rounded-lg cursor-pointer hover:bg-white/20 transition-colors duration-300"
              >
                <h3 className="font-medium">{album.title}</h3>
                <p className="text-sm text-gray-400">
                  {album.artist_credit?.[0]?.name || 'Unknown Artist'}
                </p>
                {album.date && (
                  <p className="text-xs text-gray-500 mt-1">
                    Released: {new Date(album.date).toLocaleDateString()}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {!tracks?.length && !artists?.length && !albums?.length && (
        <div className="text-center text-gray-400 py-8">
          No results found. Try a different search term.
        </div>
      )}
    </div>
  );
};