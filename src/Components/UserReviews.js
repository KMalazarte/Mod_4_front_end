import React from 'react'
import { Container, Table } from 'react-bootstrap'
import UserPageReviewRow from "./UserPageReviewRow"

const UserReviews = props => {

  let reviews = props.userReviews

  let create_slug = (review) => {
    let replaceSpaces = review.movie_title.trim().replace(/\s+/g, '-');
    // eslint-disable-next-line
    let slug = replaceSpaces.toLowerCase().replace(/[^a-zA-Z0-9\-]/g,'')
    return slug
  }

  const reviewRows = reviews.map(review =>
    <UserPageReviewRow
      key={review.id}
      id={review.id}
      poster={review.movie_poster}
      title={review.movie_title}
      score={review.r_score}
      review={review.r_comment}
      movieId={review.movie_id}
      deleteHandler={props.deleteHandler}
      slug={create_slug(review)}
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
