import React from 'react'
import ReviewCard from './ReviewCard';
import { Container, Row, Col } from 'react-bootstrap';

class ReviewContainer extends React.Component {

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
    console.log(this.props.currentReviews)
    const reviews = this.props.currentReviews.map(review => {
      return <ReviewCard
        review={review}
        />
    })

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
