import React from 'react'
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap'
import ReviewContainer from '../Components/ReviewContainer'

class MoviePage extends React.Component {

  state={
    input: "",
    score: "",
    reviews: "",
    newInput: ""
  }

  reviewHandler = (e) => {
    console.log(e.target.value);
    this.setState({
      input: e.target.value
    })
  }

  scoreHandler = (e) => {
    // console.log(e.target.value);
    this.setState({
      score: e.target.value
    })
  }

  formReset = (e) => {
    e.preventDefault()
    let form = e.target
    this.setState({
      reviews: this.state.input,
      newScore: this.state.score
    })
    form.reset()
  }

  render() {
    console.log(this.state.score);
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
            <Form onSubmit={this.formReset}>
            <Form.Group onChange={this.scoreHandler} controlId="exampleForm.ControlSelect1">
            <Form.Label>Select your score</Form.Label>
            <Form.Control  as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            </Form.Control>
            </Form.Group>
            <Form.Group onChange={this.reviewHandler} id="review_form" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Create a review below:</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button type="submit" variant="info">Submit</Button>
            </Form>
            <h1>Reviews:</h1>
            <ReviewContainer
              score={this.state.newScore}
              review={this.state.reviews}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MoviePage
