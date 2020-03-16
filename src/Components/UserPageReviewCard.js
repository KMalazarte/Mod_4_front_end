import React from 'react'
import { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap';

const UserPageReviewCard = props => {

  const [wasClicked, setWasClicked] = useState(false)

  const [deleted, setWasDeleted] = useState(false)

  const toggleCard = (e) => {
    setWasClicked(!wasClicked)
  }

  const source = `http://image.tmdb.org/t/p/w185/${props.poster}`

  const posterShow = wasClicked ?
    <>
      <Card onClick={toggleCard} bg="secondary" text="white" style={{ width: '18rem' }}>
        <Card.Header>{props.title}</Card.Header>
        <Card.Body>
          <Card.Title>Score:{props.score}/10</Card.Title>
          <Card.Text>
            Review:{props.review}
          </Card.Text>
        </Card.Body>
      </Card>
      <Button id={props.id} onClick={props.deleteHandler} variant="danger">Delete</Button>
    </>
    :
    <Card onClick={toggleCard}>
      <img alt="oh no!" src={source} />
    </Card>

  return(
    posterShow
  )

}

export default UserPageReviewCard
