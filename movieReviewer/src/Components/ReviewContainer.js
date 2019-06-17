import React from 'react'
import ReviewCard from './ReviewCard';
import { Container, Row, Col } from 'react-bootstrap';

class ReviewContainer extends React.Component {

  render() {
      return(
        <Container fluid>
          <Row>
            <ReviewCard
            score={this.props.score}
            review={this.props.review}/>
          </Row>
        </Container>
      )
  }


}

export default ReviewContainer
