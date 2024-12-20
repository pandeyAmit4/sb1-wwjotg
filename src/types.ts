// Existing interfaces...

export interface MusicBrainzResponse {
  id: string;
  name: string;
  genres?: Array<{ name: string }>;
  recordings?: any[];
  relations?: Array<{
    type: string;
    url?: {
      resource: string;
    };
  }>;
}

export interface APIResponse<T> {
  data: T;
  error?: string;
  status: number;
}