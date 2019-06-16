import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

class MoviePage extends React.Component {
  render() {
    console.log(this.props.selectedMovie);
    const source = `http://image.tmdb.org/t/p/w342/${this.props.selectedMovie.movie_img}`
    return(
      <Container fluid>
        <Row>
          <Col sm="4">
            <Image src={source} rounded />
          </Col>
          <Col >
            <h1>{this.props.selectedMovie.title}</h1>
            <h2>Avg Score: {this.props.selectedMovie.avg_score}</h2>
            <p>Overview: <br/> {this.props.selectedMovie.description}</p>
            <button>Push me </button>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MoviePage
