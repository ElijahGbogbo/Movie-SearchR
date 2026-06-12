
export interface Movie {
  id: number
  title: string
  release_date: string
  poster_path: string
}

export interface MovieServiceResponse {
    results: Movie[]
}

export interface MovieCardProps {
  movie: Movie
}

