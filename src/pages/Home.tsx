import MovieCard from '../components/MovieCard'
import {
  useState,
  useEffect,
  type ChangeEvent,
  type JSX,
  type SyntheticEvent,
} from 'react'
import '../css/Home.css'
import { getPopularMovies, searchForMovies } from '../services/movieService.ts'
import type { Movie } from '../types/Movie.ts'

function Home(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [moviesList, setMoviesList] = useState<Movie[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const loadPopularMovies = async (): Promise<void> => {
      try {
        const popularMovies: Movie[] = await getPopularMovies()
        setMoviesList(popularMovies)
      } catch (err) {
        if (err instanceof Error) {
          console.log(err)
          setError(err.message)
        } else {
          console.log(err)
          setError('Failed to load movies...')
        }
      } finally {
        setLoading(false)
      }
    }

    loadPopularMovies()
  }, [])

  async function runSearch(event: SyntheticEvent<HTMLFormElement>): void {
    event.preventDefault()
    if (!searchQuery.trim()) return
    if (loading) return
    setLoading(true)

    try {
      const searchResult = await searchForMovies(searchQuery)
      setMoviesList(searchResult)
      setError(null)
    } catch (error) {
      console.log(error)
      setError('Failed to search movies...')
    } finally {
      setLoading(false)
    }
  }
  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setSearchQuery(event.target.value)
  }

  return (
    <div className="home">
      <form onSubmit={runSearch} className="search-form">
        <input
          type="text"
          placeholder="Search movie"
          className="search-input"
          value={searchQuery}
          onChange={handleChange}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading movies...</div>
      ) : (
        <div className="movies-grid">
          {moviesList.map(
            (movieElem: Movie) =>
              movieElem.title
                .toLowerCase()
                .startsWith(searchQuery.toLowerCase()) && (
                <MovieCard movie={movieElem} key={movieElem.id} />
              )
          )}
        </div>
      )}
    </div>
  )
}

export default Home
