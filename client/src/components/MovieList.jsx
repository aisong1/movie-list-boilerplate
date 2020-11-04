import React from 'react';
import MovieListItem from './MovieListItem.jsx';

var MovieList = (props) => (
  <div className="movieList">
    <div className='tabs'>
      <button>Watched</button>
      <button>To Watch</button>
    </div>
    <table>
      <tbody>
        {props.movies.map((movie) => (
          <MovieListItem key={movie.title} movie={movie} />
        ))}
      </tbody>
    </table>
  </div> 
)

export default MovieList;