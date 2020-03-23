import React from 'react'
import MovieContainer from '../Components/MovieContainer'
import { Container } from 'react-bootstrap'

const HomePage = props => {

  let filtered =  props.movies.filter(movie => movie.title.toLowerCase().includes(props.searchedMovie.toLowerCase()))

  if (props.searchedMovie){
    return(
      <Container className="bg" fluid>
        <MovieContainer
          movies={filtered}
        />
      </Container>
    )
  } else {
    return(
      <Container className="bg" fluid>
        <MovieContainer
          movies={props.movies}
        />
      </Container>
    )
  }

}

export default HomePage
