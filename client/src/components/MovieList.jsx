import React from 'react';
import MovieListItem from './MovieListItem.jsx';

var MovieList = (props) => (
  <div>
    {console.log('Movies from inside MovieList: ', props.movies)}
    {props.movies.map((movie) => (
      <MovieListItem key={movie.title} movie={movie} />
    ))} 
  </div>
)

export default MovieList;