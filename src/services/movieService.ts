import api from './axiosInstance.ts'

const getPopularMovies = async (): Promise<void> => {
  const { data } = await api.get('/movie/popular')
  return data
}

export default getPopularMovies
