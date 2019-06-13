import React from 'react'
import MovieContainer from './MovieContainer';

class MoviePage extends React.Component {

  state = {
    movies: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(moviesArr =>  {
      this.setState({
      movies: moviesArr.movies})
      })
  }

  render() {
    console.log(this.state.movies);
      return(
        <div>
          <MovieContainer
          movies={this.state.movies}/>
        </div>
      )
  }

} //class MoviePage extends

export default MoviePage
