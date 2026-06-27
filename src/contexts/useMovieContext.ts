import { useContext } from 'react'
import { MovieContext } from './createMovieContext.ts'

export const useMovieContext = () => {
  const context = useContext(MovieContext)
  if (!context) {
    throw new Error('useMovieContext must be used with a MovieProvider')
  }
  return context
}
