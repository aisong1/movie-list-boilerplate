import React from "react";

var MovieListItem = (props) => (
    <div className="movieListItem">
      <h3>{props.movie.title}</h3>
    </div>
)

export default MovieListItem;
