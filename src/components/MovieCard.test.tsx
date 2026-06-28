import { render, screen } from '@testing-library/react'
import MovieCard from './MovieCard.tsx'
import type { Movie } from '../types/Movie.ts'
import { MovieProvider } from "../contexts/MovieContext.tsx"

const mockMovie: Movie = {
  id: 1,
  title: 'Batman',
  release_date: '2019',
  poster_path: 'https://via.placeholder.com/300x450',      
}

test('renders movie title', () => {
  render(
    <MovieProvider>
      <MovieCard
      movie={mockMovie}
      />
    </MovieProvider>
  )
  expect(screen.getByText('Batman')).toBeInTheDocument()
})
