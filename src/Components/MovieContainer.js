import React from 'react'
import MovieCard from './MovieCard';
import { Container, Row, Col } from 'react-bootstrap';

const MovieContainer = props => {

  let movieCards

  if (props.movies.length) {
    movieCards = props.movies.map(movie =>
      <Col sm="4">
          <MovieCard
            key={movie.title}
            id={movie.id}
            movie={movie}
          />
      </Col>
    )
  } else if (!props.movies.length && props.searchedMovie){
    movieCards = <h1 id="sorry-msg"> Sorry, no movies match that search </h1>
  }

  return(
    <Container fluid>
      <Row>
        {movieCards}
      </Row>
    </Container>
  )

}

export default MovieContainer
