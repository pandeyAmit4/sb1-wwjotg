import { API_CONFIG } from './config';
import { APIError, NetworkError } from './errors';
import type { MusicBrainzResponse } from '../../types';

const { BASE_URL, USER_AGENT, DEFAULT_PARAMS } = API_CONFIG.MUSICBRAINZ;

async function fetchFromMusicBrainz<T>(
  endpoint: string,
  params: Record<string, string> = {}
): Promise<T> {
  try {
    const queryString = new URLSearchParams({
      ...DEFAULT_PARAMS,
      ...params,
    }).toString();

    const response = await fetch(`${BASE_URL}${endpoint}?${queryString}`, {
      headers: {
        'User-Agent': USER_AGENT,
      },
    });

    if (!response.ok) {
      throw new APIError(
        `API request failed: ${response.statusText}`,
        response.status
      );
    }

    return response.json();
  } catch (error) {
    if (error instanceof APIError) throw error;
    if (error instanceof Error && 'cause' in error) {
      throw new NetworkError();
    }
    throw new APIError('Failed to fetch data', undefined, error);
  }
}

export async function fetchArtistDetails(artistId: string): Promise<MusicBrainzResponse> {
  if (!artistId?.trim()) {
    throw new APIError('Artist ID is required', 400);
  }

  return fetchFromMusicBrainz(`/artist/${artistId}`, {
    inc: 'recordings,releases,url-rels,genres',
  });
}

export async function searchArtists(query: string) {
  if (!query?.trim()) return { artists: [] };

  return fetchFromMusicBrainz('/artist', {
    query: query,
    limit: '20',
  });
}

export async function searchTracks(query: string) {
  if (!query?.trim()) return { recordings: [] };

  return fetchFromMusicBrainz('/recording', {
    query: query,
    limit: '20',
  });
}