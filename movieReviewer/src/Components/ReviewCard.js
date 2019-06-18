import React from 'react'
import { Card } from 'react-bootstrap'

class ReviewCard extends React.Component {

  render() {
    // console.log(this.props);
    return(
      <Card bg="secondary" text="white" style={{ width: '18rem' }}>
        <Card.Header>Username</Card.Header>
        <Card.Body>
          <Card.Title>Score:{this.props.review.r_score}/10</Card.Title>
          <Card.Text>
            Review: {this.props.review.r_comment}
          </Card.Text>
        </Card.Body>
      </Card>
  )}
}

export default ReviewCard
