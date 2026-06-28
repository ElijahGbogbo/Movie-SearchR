import type { JSX } from 'react'
import '../css/Favorites.css'
import { useMovieContext } from '../contexts/useMovieContext.ts'
import MovieCard from '../components/MovieCard.tsx'
import type { Movie } from '../types/Movie.ts'

function Favorites(): JSX.Element {
  const { favorites } = useMovieContext()

  if (favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>Favorite Movies</h2>
        <div className="movies-grid">
          {favorites.map((movieElem: Movie) => (
            <MovieCard movie={movieElem} key={movieElem.id} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies yet</h2>
      <p>Start adding Movies to your Favorites and they will appear here!</p>
    </div>
  )
}

export default Favorites
