export interface Movie {
  _id: string;
  title: string;
  plot: string;
  poster: string;
  year: number;
  runtime: number;
  released: string;
  imdb: { rating: number };
  genres: string[];
  directors: string[];
  type: string;
}

export interface MoviesActionResponse {
  movies: Movie[];
  message: string;
  success: boolean;
}
