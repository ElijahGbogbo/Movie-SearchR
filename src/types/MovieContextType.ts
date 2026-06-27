import type { Movie } from './Movie.ts'
import type { ReactNode } from 'react'

export interface MovieContextType {
  favorites: Movie[]
  addToFavorites: (movie: Movie) => void
  removeFromFavorites: (movieId: number) => void
  isFavorite: (movieId: number) => boolean
}

export interface MovieProviderProps {
  children: ReactNode
}
