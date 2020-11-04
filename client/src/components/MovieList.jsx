import React from 'react';
import MovieListItem from './MovieListItem.jsx';

var MovieList = (props) => (
  // <>
  // <div>
  //   <button>Watched</button>
  //   <button>To Watch</button>
  // </div>
  <table>
    <tbody>
      {props.movies.map((movie) => (
        <MovieListItem key={movie.title} movie={movie} />
      ))}
    </tbody>
  </table>
  // </> 
)

export default MovieList;