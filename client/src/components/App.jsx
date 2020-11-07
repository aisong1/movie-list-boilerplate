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
    this.setState({
      addMovieTitle: e.currentTarget.value
    });
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
      console.log(this.state.movies);
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

  handleWatchedClicked() {
    const watched = this.state.movies.filter((movie) => {
      return movie.title.toLowerCase().includes(this.state.movieSearch.toLowerCase());
    });
    this.setState({
      moviesToRender: watched
    })
  }

  handleToWatchClicked() {
    const toWatch = this.state.movies.filter((movie) => {
      return movie.title.toLowerCase().includes(this.state.movieSearch.toLowerCase());
    });
    this.setState({
      moviesToRender: toWatch
    })
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
          />
      </div>
    )
  }
}

export default App;
