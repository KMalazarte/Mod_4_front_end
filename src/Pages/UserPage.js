import React from 'react'
import UserReviews from '../Components/UserReviews'
import { Container } from 'react-bootstrap';

class UserPage extends React.Component {

  state={
    userReviews: []
  }

  componentDidMount(){
    fetch(`http://localhost:3000/reviews/${localStorage.user_id}`)
      .then(response => response.json())
      .then(reviews =>
        this.setState({
          userReviews: reviews.reviews
        })
      )
  }

  render() {
    return(
      <Container>
        <h1> {localStorage.username}'s PAGE </h1>
        <UserReviews
        userReviews={this.state.userReviews}
        />
      </Container>
    )
  }
}

export default UserPage
