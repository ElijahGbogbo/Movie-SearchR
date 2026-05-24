import api from './axiosInstance.ts'

const getPopularMovies = async (): Promise<void> => {
  try {
    const { data } = await api.get('/movie/popular')
    // console.log(data)
  } catch (error) {
    console.log(error)
  }
}

export default getPopularMovies
