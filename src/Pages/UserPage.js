import React from 'react'
import UserReviews from '../Components/UserReviews'
import { Container, Alert } from 'react-bootstrap'
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
  
  if (localStorage.loggedIn){
    return(
      <Container>
        <h1> Welcome {localStorage.username}! The movies you have reviewed are listed below </h1>
        <UserReviews
          userReviews={userReviews}
          deleteHandler={deleteHandler}
        />
      </Container>
    )
  } else {
    return(
      <Alert variant={"warning"}> Please log in to see your reviews! </Alert>
    )
  }

}

export default UserPage
