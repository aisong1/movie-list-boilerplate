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

  handleSearchSubmit(e) {
    var searchedMovies = this.state.movies;
    if (this.state.movieSearch !== '') {
      searchedMovies = [];
      for (var i = 0; i < this.state.movies.length; i++) {
        if (this.state.movies[i].title.includes(this.state.movieSearch)) {
          searchedMovies.push(this.state.movies[i]);
        }
      }
    }
    
    if (searchedMovies.length === 0) {
      // this.handleNoMovieFound();
      alert('No movie by that name was found. Try again.')
    } else {
      this.setState({
        movies: searchedMovies
      });
    }
    e.preventDefault();
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
    //document.getElementsById("addBar").value = '';
    e.preventDefault();
  }

  // handleNoMovieFound() {
  //   return (
  //     <div className="noMovieFound">
  //       <h3>No movie by that name was found. Try again.</h3>
  //     </div>
  //   )
  // }

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
            movies={this.state.movies}
          />
        </div>
      </div>
    )
  }
}

export default App;