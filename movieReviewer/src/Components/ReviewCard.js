import React from 'react'
import { Card } from 'react-bootstrap'


class ReviewCard extends React.Component {

  render() {
    // console.log(this.props);
    // console.log(this.props.movie);
    return(
      <Card bg="secondary" text="white" style={{ width: '18rem' }}>
        <Card.Header>Username</Card.Header>
        <Card.Body>
          <Card.Title>Score: {this.props.score}/10</Card.Title>
          <Card.Text>
            Review: {this.props.review}
          </Card.Text>
        </Card.Body>
      </Card>
  )}
}

export default ReviewCard
