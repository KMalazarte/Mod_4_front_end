import React, { useState, useEffect } from 'react'
import UserReviews from '../Components/UserReviews'
import { Container, Alert } from 'react-bootstrap'
// import { useHttp } from '../Hooks/http'

const UserPage = () => {

  const [userReviews, setUserReviews] = useState([])

  useEffect(() => {
    fetchUserReviews()
  }, [])

  let fetchUserReviews = async () => {
    const fetchData = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/reviews/${localStorage.user_id}`)
    let data = await fetchData.json()
    setUserReviews(data)
  }

  if (localStorage.loggedIn){
    return(
      <Container fluid className="bg">
        <h1 id="user-page-header"> Welcome {localStorage.username}! The movies you have reviewed are listed below </h1>
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
