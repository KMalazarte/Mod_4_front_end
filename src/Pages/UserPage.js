import React from 'react'
import { useState, useEffect } from 'react'
import UserReviews from '../Components/UserReviews'
import { Container, Alert } from 'react-bootstrap'
import { useHttp } from '../Hooks/http'

const UserPage = () => {

  let userReviews = useHttp(`http://localhost:3000/reviews/${localStorage.user_id}`,[])

  const deleteHandler = (e) => {
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
