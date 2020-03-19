import React from 'react'
import MovieCard from './MovieCard';
import { Container, Row, Col } from 'react-bootstrap';

const MovieContainer = props => {

  const movieCards = props.movies.map(movie =>
    <Col sm="4">
      <MovieCard
        key={movie.title}
        id={movie.id}
        movie={movie}
        clickHandler={props.clickHandler}
        reviewClickHandler={props.reviewClickHandler}
      />
    </Col>
  )

  return(
    <Container fluid>
      <Row>
          {movieCards}
      </Row>
    </Container>
  )

}

export default MovieContainer

// <div>
// {movieCards}
// </div>
