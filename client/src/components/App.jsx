import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      moviesToRender: [],
      movieSearch: '',
      addMovieTitle: '',
    };
  }

  handleSearchChange(e) {
    this.setState({
      movieSearch: e.currentTarget.value
    });
  }

  handleSearchSubmit(e) {
    const searched = this.state.movies.filter((movie) => {
      return movie.title.toLowerCase().includes(this.state.movieSearch.toLowerCase());
    });
    this.setState({
      moviesToRender: searched
    }, (err) => {
      if (err) {
        throw new Error(err);
      } else {
        this.render();
      }
    })
    e.preventDefault();
  }

  handleAddChange(e) {
    if (e.currentTarget.value !== '') {
      this.setState({
        addMovieTitle: e.currentTarget.value
      });
    }
  }

  handleAddSubmit(e) {
    const newMovie = {
      title: this.state.addMovieTitle,
      watched: false
    }
    let hasAlreadyBeenAdded = false;
    for (var i = 0; i < this.state.movies.length; i++) {
      if (this.state.movies[i].title === this.state.addMovieTitle) {
        hasAlreadyBeenAdded = true;
      }
    }
    if (!hasAlreadyBeenAdded) {
      this.state.movies.push(newMovie);
    }
    this.setState({
      movies: this.state.movies,
      moviesToRender: this.state.movies
    }, (err) => {
      if (err) {
        throw new Error(err);
      } else {
        this.render();
      }
    })
    e.preventDefault();
  }

  handleWatchedFlagToggled(title, watched) {
    this.setState((state) => {
      return {movies: state.movies.map((movie) => {
        return movie.title === title ? { ...movie, "watched": watched } : movie;
      })}
    });
  }

  handleWatchClicked() {
    this.setState((state) => {
      return {moviesToRender: state.movies.filter((movie) => {
        return movie.watched === true;
      })}
    });
  }

  handleToWatchClicked() {
    this.setState((state) => {
      return {moviesToRender: state.movies.filter((movie) => {
        return movie.watched === false;
      })}
    });
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
          <MovieList
            movies={this.state.moviesToRender}
            handleWatchClicked={this.handleWatchClicked.bind(this)}
            handleToWatchClicked={this.handleToWatchClicked.bind(this)}
            handleWatchedFlagToggled={this.handleWatchedFlagToggled.bind(this)}
          />
      </div>
    )
  }
}

export default App;
