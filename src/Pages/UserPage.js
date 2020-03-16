import React from 'react'
import UserReviews from '../Components/UserReviews'
import { Container } from 'react-bootstrap'
import { useHttp } from '../Hooks/http'

const UserPage = () => {

  const userReviews = useHttp(`http://localhost:3000/reviews/${localStorage.user_id}`,[])

  const deleteHandler = (e) => {
    console.log(e.target.id)
    fetch(`http://localhost:3000/review/${e.target.id}`, {
      method: 'DELETE'
    }).then(() => {
    }).catch(err => {
      console.error(err)
    })
  }

  return(
    <Container>
      <h1> Welcome {localStorage.username}! This is your review page </h1>
      <UserReviews
        userReviews={userReviews}
        deleteHandler={deleteHandler}
      />
    </Container>
  )
  
}

export default UserPage
