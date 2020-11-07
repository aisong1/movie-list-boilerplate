import React from 'react';
import MovieListItem from './MovieListItem.jsx';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watched: [],
      toWatch: []
    }
  }

  handleWatched(movie) {
    this.setState({
      watched: this.state.watched.push(movie)
    })
    console.log(this.state.watched);
  }

  handleToWatch() {
    this.setState({
      toWatch: this.state.toWatch.push(movie)
    })
    console.log(this.state.toWatch);
  }

  render() {
    return (
      <div className="movieList">
        <div className='tabs'>
          <button onClick={this.handleWatched}>Watched</button>
          <button onClick={this.handleToWatch}>To Watch</button>
        </div>
        <table>
          <tbody>
            {this.props.movies.map((movie) => (
              <MovieListItem key={movie.title} movie={movie} />
            ))}
            {/* handleWatched={this.handleWatched.bind(this)} handleToWatch={this.handleToWatch.bind(this)} */}
          </tbody>
        </table>
      </div> 
    )
  }
}

export default MovieList;