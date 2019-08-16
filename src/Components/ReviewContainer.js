import React from 'react'
import ReviewCard from './ReviewCard';
import { Container, Row, Col } from 'react-bootstrap';

class ReviewContainer extends React.Component {
  render() {

    // console.log(this.props.currentReviews.review);
    const reviews = this.props.currentReviews.map(review =>
      <Col sm="5">
        <Col>
        <ReviewCard
          key= {review.id}
          review= {review}
        />
        </Col>
      </Col>
    )
      return(
        <Container fluid>
          <Row>
              {reviews}
          </Row>
        </Container>
      )
  }


}

export default ReviewContainer
