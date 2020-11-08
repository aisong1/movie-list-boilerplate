import React from 'react';
import MovieListItem from './MovieListItem.jsx';

const MovieList = (props) => {
  return (
    <div className="movieList">
      <div className='tabs'>
        <button onClick={props.handleWatchClicked}>Watched</button>
        <button onClick={props.handleToWatchClicked}>To Watch</button>
      </div>
      <table>
        <tbody>
          {props.movies.map((movie) => (
            <MovieListItem 
              key={movie.title} 
              movie={movie}
              handleWatchedFlagToggled={props.handleWatchedFlagToggled}
            />
          ))}
        </tbody>
      </table>
    </div> 
  )
}


export default MovieList;