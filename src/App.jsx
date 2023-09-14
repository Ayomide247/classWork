import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './components/Movielist';
// import MovieList from './components/MovieList';
import Filter from './components/Filter';
import MovieDetail from './components/MovieDetails';
import movies from './movies';

function App() {
  const [titleFilter, setTitleFilter] = React.useState('');
  const [ratingFilter, setRatingFilter] = React.useState('');

  return (
    <Router>
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-semibold mb-4">Movie App</h1>
        <Switch>
          <Route path="/movie/:id">
            <MovieDetail movie={movies[0]} />
          </Route>
          <Route path="/">
            <Filter
              titleFilter={titleFilter}
              ratingFilter={ratingFilter}
              setTitleFilter={setTitleFilter}
              setRatingFilter={setRatingFilter}
            />
            <MovieList movies={movies} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
