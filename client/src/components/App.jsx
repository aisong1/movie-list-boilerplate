import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      movieSearch: '',
      addMovieTitle: '',
    };
  }

  handleSearchChange(e) {
    this.setState({
      movieSearch: e.currentTarget.value
    });
  }

  handleSearchSubmit() {
    return this.state.movies.filter((movie) => {
      return movie.title.toLowerCase().includes(this.state.movieSearch.toLowerCase());
    })
  }

  handleAddChange(e) {
    this.setState({
      addMovieTitle: e.currentTarget.value
    });
  }

  handleAddSubmit(e) {
    var newMovie = {
      title: this.state.addMovieTitle
    }
    var hasAlreadyBeenAdded = false;
    for (var i = 0; i < this.state.movies.length; i++) {
      if (this.state.movies[i].title === this.state.addMovieTitle) {
        hasAlreadyBeenAdded = true;
      }
    }
    if (!hasAlreadyBeenAdded) {
      this.state.movies.push(newMovie);
    }
    this.setState({
      movies: this.state.movies
    })
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="addMovie">
          <AddMovie 
            handleAddChange={this.handleAddChange.bind(this)}
            handleAddSubmit={this.handleAddSubmit.bind(this)}
            />
        </div>
        <div className="search">
          <Search
            handleSearchChange={this.handleSearchChange.bind(this)}
            handleSearchSubmit={this.handleSearchSubmit.bind(this)}
          />
        </div>
        <div className="movieList">
          <MovieList
            movies={this.handleSearchSubmit()}
          />
        </div>
      </div>
    )
  }
}

export default App;