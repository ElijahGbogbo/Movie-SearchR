
import {render, screen} from '@testing-library/react';
import MovieCard from './MovieCard.tsx';

test('renders movie title', () => {
    render(
        <MovieCard movie={
        {id: 1, title: 'Batman', release_date: '2019', url: 'https://via.placeholder.com/300x450'}
        } />
    );
    expect(screen.getByText('Batman')).toBeInTheDocument();
})


