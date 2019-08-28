import React from 'react'
import { useState } from 'react'
import { Card, Container, Col } from 'react-bootstrap'
import UserPageReviewCard from "./UserPageReviewCard"

const UserReviews = props => {

    const reviewCards = props.userReviews[0].map(review =>
      <Col sm="3">
        <UserPageReviewCard
          key={review.id}
          id={review.id}
          poster={review.movie_poster}
          title={review.movie_title}
          score={review.r_score}
          review={review.r_comment}
        />
      </Col>)

    return(
      <Container fluid>
        {reviewCards}
      </Container>
    )
}

export default UserReviews
