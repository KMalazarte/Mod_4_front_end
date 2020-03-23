import React from 'react'
import { useState } from 'react'
import { Card, Container, Table, Col } from 'react-bootstrap'
import UserPageReviewRow from "./UserPageReviewRow"

const UserReviews = props => {

  const reviewRows = props.userReviews.map(review =>
      <UserPageReviewRow
        key={review.id}
        id={review.id}
        poster={review.movie_poster}
        title={review.movie_title}
        score={review.r_score}
        review={review.r_comment}
        movieId={review.movie_id}
        deleteHandler={props.deleteHandler}
      />
      )

    return(
      <Container fluid>
        <Table striped hover>
          <thead>
            <tr>
              <th>Poster</th>
              <th>Movie Title</th>
              <th>Rating</th>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>
            {reviewRows}
          </tbody>
          </Table>
      </Container>
    )
}

export default UserReviews
