import axios from 'axios'

const API_TOKEN = import.meta.env.VITE_TMDB_TOKEN

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`,
  },
})

export default api;
