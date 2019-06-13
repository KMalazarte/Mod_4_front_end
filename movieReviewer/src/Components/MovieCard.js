import React from 'react'


class MovieCard extends React.Component {

  render() {
    console.log(this.props.movie);
    return(
        <div>
          <h1> Title: {this.props.movie.title} </h1>
          <p>Description: {this.props.movie.description}</p>
          <p>Average Score: {this.props.movie.avg_score}</p>
        </div>
  )}
}

export default MovieCard
