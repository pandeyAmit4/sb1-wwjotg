export interface Track {
  id: string;
  title: string;
  artist_name: string;
  duration: number;
  image: string;
  audio?: string;
  album?: string;
  year?: string;
}