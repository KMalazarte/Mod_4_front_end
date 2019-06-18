import React from 'react'
import MovieCard from './MovieCard';
import { Container, Row, Col } from 'react-bootstrap';

class MovieContainer extends React.Component {

  render() {

    const movieCards = this.props.movies.map(movie =>
      <Col sm="4">
        <MovieCard
            key={movie.title}
            id={movie.id}
            movie={movie}
            clickHandler={this.props.clickHandler}
            reviewClickHandler={this.props.reviewClickHandler}
          />
      </Col>)
      return(
        <Container fluid>
          <Row>
              {movieCards}
          </Row>
        </Container>
      )
  }


}

export default MovieContainer

// <div>
// {movieCards}
// </div>
