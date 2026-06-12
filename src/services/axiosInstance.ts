import axios from 'axios'
// import dotenv from 'dotenv'

// dotenv.config()

// const API_TOKEN = import.meta.env?.VITE_TMDB_TOKEN || process.env.TMDB_TOKEN
const API_TOKEN = import.meta.env?.VITE_TMDB_TOKEN

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`,
  },
})

export default api
