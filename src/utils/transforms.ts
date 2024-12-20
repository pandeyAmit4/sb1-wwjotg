import { Track } from '../types/track';

const DEFAULT_IMAGES = [
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80',
  'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=800&q=80',
  'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
  'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80'
];

export function getRandomImage(): string {
  return DEFAULT_IMAGES[Math.floor(Math.random() * DEFAULT_IMAGES.length)];
}

export function transformToTracks(recordings: any[]): Track[] {
  return recordings.map(recording => ({
    id: recording.id,
    title: recording.title,
    artist_name: recording.artist_credit?.[0]?.name || 'Unknown Artist',
    duration: Math.floor((recording.length || 0) / 1000),
    image: getRandomImage(),
    audio: ''
  }));
}