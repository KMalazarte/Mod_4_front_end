import React from 'react'
import { useState } from 'react'
import { Card, Container, Col, Row } from 'react-bootstrap'
import UserPageReviewCard from "./UserPageReviewCard"

const UserReviews = props => {

  const reviewCards = () => props.userReviews[0].map(review =>
    <Col md="3">
      <UserPageReviewCard
        key={review.id}
        id={review.id}
        poster={review.movie_poster}
        title={review.movie_title}
        score={review.r_score}
        review={review.r_comment}
        deleteHandler={props.deleteHandler}
      />
    </Col>)

    return(
      <Container fluid>
        <Row>
          {reviewCards()}
        </Row>
      </Container>
    )
}

export default UserReviews
