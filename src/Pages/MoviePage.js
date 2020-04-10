import React from 'react'
import { Container, Row, Col, Image, Button, Form, Alert, Card, Modal } from 'react-bootstrap'
import ReviewContainer from '../Components/ReviewContainer'

class MoviePage extends React.Component {

  state={
    input: "",
    score: "",
    reviews: "",
    newInput: "",
    currentReviews:[],
    show: false,
    reviewId:0,
    match: this.props,
    currentMovie: {}
  }

  componentDidMount(){
    let loadJson = (url) => {
    return fetch(url)
      .then(response => response.json());
    }

    let loadReviews = (movieId) => {
      return fetch(`${process.env.REACT_APP_API_ENDPOINT}/movies/${movieId}/reviews`)
        .then(response => response.json())
        .then(reviews =>
          this.setState({
            currentReviews: reviews
          })
        )
    }

    loadJson(`${process.env.REACT_APP_API_ENDPOINT}/movies/${this.state.match.match.params.id}`)
    .then(movie =>
      this.setState({
        currentMovie: movie
      }, () => {
      loadReviews(movie.id)
      })
    )
  }

  reviewHandler = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  scoreHandler = (e) => {
    this.setState({
      score: e.target.value
    })
  }

  handleShow = (e) => {
    let currentReview = this.state.currentReviews.filter(review => review.username === localStorage.username)
    this.setState({
      show: true,
      input: currentReview[0].r_comment,
      score: parseInt(currentReview[0].r_score),
      reviewId: currentReview[0].id
    })
  }

  handleClose = (e) => {
    this.setState({
      show: false
    })
  }

  formReset = (e) => {
    e.preventDefault()

    let form = e.target
    let reviewObject= {movie_id: this.state.currentMovie.id, r_comment: this.state.input, r_score: this.state.score, username: localStorage.username, movie_title: this.props.title, movie_poster: this.props.movie_img }

    this.setState({
      reviews: this.state.input,
      currentReviews: [...this.state.currentReviews, reviewObject]
    })

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/movies/${this.state.currentMovie.id}/reviews`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        movie_id: this.state.currentMovie.id,
        movie_title: this.state.currentMovie.title,
        movie_poster: this.state.currentMovie.movie_img,
        user_id: localStorage.user_id,
        r_comment: this.state.input,
        r_score: this.state.score,
        username: localStorage.username
      })
    })
    form.reset()
  }

  deleteHandler = (e) => {

    let notMyReview = this.state.currentReviews.filter((review) => {
      return parseInt(e.target.id) !== review.id
    })

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/review/${e.target.id}`, {
      method: 'DELETE'
    }).then(() => {
    }).catch(err => {
      console.error(err)
    })

    this.setState({
      show: false,
      currentReviews: notMyReview
    })

    alert("Review Deleted")
  }

  editFormSubmitHandler = (e) => {

    let reviewObject= {r_comment: this.state.input, r_score: this.state.score, username: localStorage.username}

    let notMyReview = this.state.currentReviews.filter((review) => {
      return parseInt(e.currentTarget.id) !== review.id
    })

    e.preventDefault()

    this.setState({
      reviews: this.state.input,
      currentReviews: [...notMyReview, reviewObject]
    })

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/review/${e.target.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        r_comment: this.state.input,
        r_score: this.state.score
      })
    })
    this.handleClose()
  }

  render() {

    function alreadyReviewed(array){
      let reviewed = false
      array.forEach(function(review){
        if(review.username===localStorage.username)reviewed = true
      })
      return reviewed
    }

    let reviewList = this.state.currentReviews

    // What the movie screen will show depending on loggedin and/or movie reviewed
    let formOrLogInAlert

    let myReview = this.state.currentReviews.filter(review => review.username === localStorage.username)

    const editButton = <Button variant="info" size="sm" id="edit_button"onClick={this.handleShow}>Edit/Delete</Button>

    if(localStorage.loggedIn && alreadyReviewed(reviewList)){
      formOrLogInAlert =
        <Container>
          <h1 className="label">Your review:</h1>
          <Card bg="secondary" text="white">
            <Card.Header>
              {myReview[0].username}
              {editButton}
            </Card.Header>
            <Card.Body>
              <Card.Title>Score:{myReview[0].r_score}/10</Card.Title>
              <Card.Text>
                Review: {myReview[0].r_comment}
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
    } else if (!localStorage.loggedIn){
      formOrLogInAlert = <Alert variant={"warning"}> Please log in to rate and review this movie </Alert>
    } else if (localStorage.loggedIn && !alreadyReviewed(reviewList)){
      formOrLogInAlert =
        <Form onSubmit={this.formReset}>
          <Form.Group onChange={this.scoreHandler} controlId="exampleForm.ControlSelect1">
          <Form.Label>Select your score</Form.Label>
          <Form.Control as="select">
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
    }

    let editModal=
      <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your review below:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id={this.state.reviewId} onSubmit={this.editFormSubmitHandler}>
            <Form.Group onChange={this.scoreHandler} controlId="exampleForm.ControlSelect1" >
            <Form.Label>Select your score</Form.Label>
            <Form.Control as="select" defaultValue={this.state.score}>
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
            <Form.Group onChange={this.reviewHandler} id="review_form" controlId="exampleForm.ControlTextarea1" >
              <Form.Label>Create a review below:</Form.Label>
              <Form.Control as="textarea" rows="3" defaultValue={this.state.input}/>
            </Form.Group>
            <Button type="submit" variant="info">Submit</Button>
            <Button id={this.state.reviewId} variant="danger" onClick={this.deleteHandler}>Delete</Button>
            <Button variant="secondary" onClick={this.handleClose}>
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

    const posterSource = `http://image.tmdb.org/t/p/w342/${this.state.currentMovie.movie_img}`

    return(
      <Container fluid>
        <Row>
          <Col sm="3">
            <Image src= {posterSource} rounded />
          </Col>
          <Col >
          <h1 className="label">{this.state.currentMovie.title}</h1>
          <h2 className="label">Avg Score: {this.state.currentMovie.avg_score}</h2>
          <p className="label">Overview: <br/> {this.state.currentMovie.description}</p>
          {formOrLogInAlert}
          {editModal}
            <h1 className="label">Reviews:</h1>
            <ReviewContainer
              score={this.state.newScore}
              review={this.state.reviews}
              currentReviews={this.state.currentReviews}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MoviePage
