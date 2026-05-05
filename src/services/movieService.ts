import api from './axiosInstance.ts'

const getPopularMovies = async () => {
  try {
    const { results } = await api.get('/movie/popular')
    console.log(results)
  } catch (error) {
    console.log(error)
  }
}

export default getPopularMovies
