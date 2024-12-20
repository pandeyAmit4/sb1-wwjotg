import { Track, MusicBrainzResponse } from '../types';

const API_BASE_URL = 'https://musicbrainz.org/ws/2';
const USER_AGENT = 'MusicDiscoveryApp/1.0.0';

export class APIError extends Error {
  constructor(message: string, public statusCode?: number) {
    super(message);
    this.name = 'APIError';
  }
}

async function fetchFromMusicBrainz<T>(endpoint: string, params: Record<string, string> = {}): Promise<T> {
  const queryString = new URLSearchParams({
    fmt: 'json',
    ...params
  }).toString();

  const response = await fetch(`${API_BASE_URL}${endpoint}?${queryString}`, {
    headers: {
      'User-Agent': USER_AGENT
    }
  });

  if (!response.ok) {
    throw new APIError(
      `API request failed: ${response.statusText}`,
      response.status
    );
  }

  return response.json();
}

export async function fetchArtistDetails(artistId: string): Promise<MusicBrainzResponse> {
  try {
    return await fetchFromMusicBrainz(`/artist/${artistId}`, {
      inc: 'recordings,releases,url-rels,genres'
    });
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    throw new APIError('Failed to fetch artist details');
  }
}

export async function fetchCategoryTracks(categoryId: string): Promise<Track[]> {
  try {
    const data = await fetchFromMusicBrainz('/recording', {
      query: `tag:${categoryId}`,
      limit: '24'
    });

    return transformToTracks(data.recordings);
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    throw new APIError('Failed to fetch category tracks');
  }
}

export function transformToTracks(recordings: any[]): Track[] {
  return recordings.map(recording => ({
    id: recording.id,
    title: recording.title,
    artist_name: recording.artist_credit?.[0]?.name || 'Unknown Artist',
    duration: Math.floor((recording.length || 0) / 1000),
    image: getRandomMusicImage(),
    audio: ''
  }));
}

export function getRandomMusicImage(): string {
  const images = [
    'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80',
    'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=800&q=80',
    'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80'
  ];
  return images[Math.floor(Math.random() * images.length)];
}