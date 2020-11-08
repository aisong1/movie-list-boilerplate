import React from "react";

class MovieListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watched: this.props.movie.watched,
    }
  }

  handleClick() {
    this.setState({
      watched: !this.state.watched
    }, () => {
      this.props.handleWatchedFlagToggled(this.props.movie.title, this.state.watched);
    });
  }

  render() {
    return (
      <tr>
        <td>
          <span>{this.props.movie.title}</span>
          <span className="watchedContainer">
              {(this.state.watched) ? 
                <button className="watchedButton" onClick={this.handleClick.bind(this)}>Watched</button> : 
                <button className="notWatchedButton" onClick={this.handleClick.bind(this)}>Watched</button>}
          </span>
        </td>
      </tr>
    )
  }
}

export default MovieListItem;
