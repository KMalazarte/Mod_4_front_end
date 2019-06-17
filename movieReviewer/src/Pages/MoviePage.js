import React from 'react'
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap'

class MoviePage extends React.Component {
  render() {
    console.log(this.props.selectedMovie);
    const source = `http://image.tmdb.org/t/p/w342/${this.props.selectedMovie.movie_img}`
    return(
      <Container fluid>
        <Row>
          <Col sm="3">
            <Image src={source} rounded />
          </Col>
          <Col >
            <h1>{this.props.selectedMovie.title}</h1>
            <h2>Avg Score: {this.props.selectedMovie.avg_score}</h2>
            <p>Overview: <br/> {this.props.selectedMovie.description}</p>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Create a review below:</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button variant="info">Push me </Button>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MoviePage
