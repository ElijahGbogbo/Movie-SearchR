import { useState, useEffect, createContext, useContext } from 'react'
import type { MovieContextType } from '../types/MovieContextType.ts'
import type { MovieProviderProps } from '../types/MovieContextType.ts'
import type { Movie } from '../types/Movie.ts'

const MovieContext = createContext<MovieContextType | null>(null)

export const useMovieContext = () => {
  const context = useContext(MovieContext)
  if (!context) {
    throw new Error('useMovieContext must be used with a MovieProvider')
  }
  return context
}

export const MovieProvider = ({ children }: MovieProviderProps) => {
  const [favorites, setFavorites] = useState<Movie[]>([])

  useEffect(() => {
    const storedFavs = localStorage.getItem('favorites')
    if (storedFavs) setFavorites(JSON.parse(storedFavs))
  }, [])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const addToFavorites = (movie: Movie) => {
    setFavorites((prev) => [...prev, movie])
  }
  const removeFromFavorites = (movieId: number) => {
    setFavorites((prev) => prev.filter((movie) => movieId !== movie.id))
  }
  const isFavorite = (movieId: number) => {
    return favorites.some((movie) => movieId === movie.id)
  }

  const value: MovieContextType = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  }

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
}
