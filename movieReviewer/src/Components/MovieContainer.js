import React from 'react'
import MovieCard from './MovieCard';

class MovieContainer extends React.Component {

  render() {
    // console.log(typeof this.props.movies);
    // const moviesArray = this.props.movies.movies
    const movieCards = this.props.movies.movies.map(movie => <MovieCard key={movie.id} id={movie.title} movie={movie}/>)
      return(
        <div>
        </div>
      )
  }


}

export default MovieContainer

// {movieCards}
