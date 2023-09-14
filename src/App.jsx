import React from 'react';
import MovieList from './components/Movielist';
import Filter from './components/Filter';
import movies from './movies';

function App() {
  const [titleFilter, setTitleFilter] = React.useState('');
  const [ratingFilter, setRatingFilter] = React.useState('');

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Movie App</h1>
      <Filter
        titleFilter={titleFilter}
        ratingFilter={ratingFilter}
        setTitleFilter={setTitleFilter}
        setRatingFilter={setRatingFilter}
      />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
