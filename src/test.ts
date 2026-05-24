import api from './services/axiosInstance.ts'

const getPopularMovies = async (): Promise<void> => {
    const { data } = await api.get('/movie/popular')
    console.log(data)
}

getPopularMovies()

export default getPopularMovies
