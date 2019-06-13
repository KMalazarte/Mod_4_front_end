import React from 'react'
import MovieCard from './MovieCard';

class MovieContainer extends React.Component {

  render() {
    console.log(this.props.movies);
    const movieCards = this.props.movies.map(movie => <MovieCard key={movie.id} id={movie.title} movie={movie}/>)
      return(
        <div>
        {movieCards}
        </div>
      )
  }


}

export default MovieContainer
