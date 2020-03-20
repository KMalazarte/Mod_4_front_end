import React from 'react'
import MovieCard from './MovieCard';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieContainer = props => {

  console.log(props.movies.length);

  let fixedTitle = movie => {
    let title = movie.title
    let underscored = title.replace(/ /g,"_")
    return underscored
  }

  let movieCards

  if (props.movies.length) {
    movieCards = props.movies.map(movie =>
      <Col sm="4">
        <Link to={`/movies/${fixedTitle(movie)}`}>
          <MovieCard
            key={movie.title}
            id={movie.id}
            movie={movie}
            reviewClickHandler={props.reviewClickHandler}
          />
        </Link>
      </Col>
    )
  } else {
    movieCards =
      <h1> Sorry, no movies match that search </h1>
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

// <div>
// {movieCards}
// </div>
