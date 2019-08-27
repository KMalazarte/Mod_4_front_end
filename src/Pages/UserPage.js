import React, { useState, useEffect } from 'react'
import UserReviews from '../Components/UserReviews'
import { Container } from 'react-bootstrap';

const UserPage = () => {
  
  const [userReviews, setUserReviews] = useState([])

  useEffect (() => {
    fetch(`http://localhost:3000/reviews/${localStorage.user_id}`)
        .then(response => response.json())
        .then(reviews =>
          setUserReviews(reviews.reviews
          )
        )
  }, [])

    return(
      <Container>
        <h1> {localStorage.username}'s PAGE </h1>
        <UserReviews
        userReviews={userReviews}
        />
      </Container>
    )
}

export default UserPage
