import React from 'react'
import { Card } from 'react-bootstrap'


class ReviewCard extends React.Component {
  // state = {
  //   review: []
  // }
  //
  // componentDidMount(){
  //   fetch("http://localhost:3000/movies/1/reviews")
  //   .then(response => response.json())
  //   .then(review =>  {
  //     // console.log(moviesArr.movies);
  //     this.setState({
  //       review
  //     })
  //   })
  // }

  render() {
    console.log(this.props);

    return(
      <Card bg="secondary" text="white" style={{ width: '18rem' }}>
        <Card.Header>{this.props.review.username}</Card.Header>
        <Card.Body>
          <Card.Title>Score: {this.props.review.r_score}/10</Card.Title>
          <Card.Text>
            Review: {this.props.review.r_comment}
          </Card.Text>
        </Card.Body>
      </Card>
  )}
}

export default ReviewCard
