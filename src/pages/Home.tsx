import MovieCard from '../components/MovieCard'
import {
  useState,
  type ChangeEvent,
  type JSX,
  type SyntheticEvent,
} from 'react'
import '../css/Home.css'

interface MovieItem {
  id: number
  title: string
  release_date: string
  url: string
}

function Home(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>('')

  const moviesList: MovieItem[] = [
    {
      id: 1,
      title: 'The Terminator',
      release_date: '2019',
      url: 'https://via.placeholder.com/300x450',
    },
    {
      id: 2,
      title: 'Passion of The Christ',
      release_date: '2004',
      url: 'https://via.placeholder.com/300x450',
    },
    {
      id: 3,
      title: 'Spider-Man 1',
      release_date: '2002',
      url: 'https://via.placeholder.com/300x450',
    },
  ]
  function runSearch(event: SyntheticEvent<HTMLFormElement>): void {
    event.preventDefault()
    alert(searchQuery)
    setSearchQuery('*****')
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
      <div className="movies-grid">
        {moviesList.map(
          (movieElem: MovieItem) =>
            movieElem.title
              .toLowerCase()
              .startsWith(searchQuery.toLowerCase()) && (
              <MovieCard movie={movieElem} key={movieElem.id} />
            )
        )}
      </div>
    </div>
  )
}

export default Home
