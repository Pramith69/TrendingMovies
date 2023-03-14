export enum Options {
  trending = 'trending',
  upcoming = 'upcoming',
}

export type Movie = {
  title?: string;
  name: string;
  release_date: string;
  genre_ids: string[];
  overview: string;
  vote_average: number;
  backdrop_path: string;
};
