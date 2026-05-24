
import api from './services/axiosInstance.ts'

const getPopularMovies = async (): Promise<void> => {
  try {
    const { data } = await api.get('/movie/popular')
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

getPopularMovies()

export default getPopularMovies

