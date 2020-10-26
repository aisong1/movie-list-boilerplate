import React from 'react';

var MovieList = (props) => (
  <div>
    {props.movies.map((movie) => {
      if (movie) {
        return (
          <div className="movieListItem">
            <h3>{movie.title}</h3>
          </div>
        )
      }
    })} 
  </div>
)

export default MovieList;