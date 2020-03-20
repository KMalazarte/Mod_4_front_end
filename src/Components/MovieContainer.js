import React from 'react'
import MovieCard from './MovieCard';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieContainer = props => {

  let fixedTitle = movie => {
    let title = movie.title
    let underscored = title.replace(/ /g,"_")
    return underscored
  }

  const movieCards = props.movies.map(movie =>
    <Col sm="4">
      <Link to={`/movies/${fixedTitle(movie)}`} clickHandler={props.clickHandler}>
        <MovieCard
          key={movie.title}
          id={movie.id}
          movie={movie}
          reviewClickHandler={props.reviewClickHandler}
        />
      </Link>
      <h5 textAlign="right">{movie.avg_score}/10</h5>
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
