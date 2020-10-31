import React from 'react';
import MovieListItem from './MovieListItem.jsx';

var MovieList = (props) => (
  <div>
    {props.movies.map((movie) => (
      <MovieListItem key={movie.title} movie={movie} />
    ))} 
  </div>
)

export default MovieList;