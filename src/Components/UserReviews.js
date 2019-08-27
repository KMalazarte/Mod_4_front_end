import React from 'react'
import { Card } from 'react-bootstrap';

const UserReviews = props => {

    const reviews = props.userReviews[0].map(review =>
      <Card bg="secondary" text="white" style={{ width: '18rem' }}>
        <Card.Header>Movie Title Here</Card.Header>
        <Card.Body>
          <Card.Title>Score:{review.r_score}/10</Card.Title>
          <Card.Text>
            Review: {review.r_comment}
          </Card.Text>
        </Card.Body>
      </Card>
    )
    return(
      <div>
        <h1> REVIEWS YOU HAVE CREATED: </h1>
          <p> {reviews} </p>
      </div>
    )
}

export default UserReviews
