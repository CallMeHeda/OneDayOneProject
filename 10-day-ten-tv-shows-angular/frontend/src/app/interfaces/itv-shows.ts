export interface ITvShows {
  id: number;
  name: string;
  first_air_date?: Date;
  last_air_date?: Date;
  overview?: string;
  backdrop_path?: string;
  poster_path?: string;
  vote_average?: number;
  created_by?: [
    {
      name: string;
    }
  ];
  genres?: [
    {
      id: number;
      name: string;
    }
  ];
  in_production?: boolean;
  networks?: [
    {
      id: number;
      logo_path: string;
      name: string;
    }
  ];
  number_of_episodes?: number;
  number_of_seasons?: number;
  production_countries?: [
    {
      name: string;
    }
  ];
  status?: string;
  tagline?: string;
}
