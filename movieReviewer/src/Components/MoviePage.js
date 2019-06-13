import React from 'react'

class MoviePage extends React.Component {

  render() {
    console.log(this.props.movies);
    let movies = this.props.movies.map(movie => <MovieCard key={movie.id} id={movie.title} movie={movie}/>)
      return(
        <div>
        {movies}
        </div>
      )
  }
}

export default GamePage
