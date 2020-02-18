import React from 'react'
import UserReviews from '../Components/UserReviews'
import { Container } from 'react-bootstrap'
import { useHttp } from '../Hooks/http'

const UserPage = () => {

  const userReviews = useHttp(`http://localhost:3000/reviews/${localStorage.user_id}`, [])

  console.log(userReviews)

    return(
      <Container>
        <h1> Welcome {localStorage.username}! This is your review page </h1>
        <UserReviews
          userReviews={userReviews}
        />
      </Container>
    )
}

export default UserPage
