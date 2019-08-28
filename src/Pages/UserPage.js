import React from 'react'
import UserReviews from '../Components/UserReviews'
import { Container } from 'react-bootstrap'
import { useHttp } from '../Hooks/http'

const UserPage = () => {

  const userReviews = useHttp(`http://localhost:3000/reviews/${localStorage.user_id}`, [])

  // const movies = useHttp("http://localhost:3000/movies", [])

    return(
      <Container>
        <h1> {localStorage.username}'s Review Page </h1>
        <UserReviews
        userReviews={userReviews}
        />
      </Container>
    )
}

export default UserPage
