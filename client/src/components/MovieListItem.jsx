import React from "react";

class MovieListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: props.movie,
      watched: false,
    }
  }

  render() {
    return (
      <div className="movieListItem">
        <span>{this.state.movie.title}</span>
        <span>
          <div className="watchedContainer" onClick={() => this.setState({watched: !this.state.watched})}>
            {this.state.watched ? <button className="watchedButton">Watched</button> : <button className="notWatchedButton">Watched</button>}
          </div>
        </span>
      </div>
    )
  }

}

export default MovieListItem;
