import api from './axiosInstance.ts'
import type { Movie } from '../types/Movie.ts'

const getPopularMovies = async (): Promise<Movie[]> => {
  const { data } = await api.get('/movie/popular')
  return data.results
}

const searchForMovies = async (query: string): Promise<Movie[]> => {
  const { data } = await api.get('/search/movie', {
    params: {
      query: query,
    },
  })
  return data.results
}

export { getPopularMovies, searchForMovies }
