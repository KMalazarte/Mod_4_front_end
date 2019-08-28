import React from 'react'
import { useState } from 'react'
import { Card } from 'react-bootstrap';

const UserPageReviewCard = props => {

  const [wasClicked, setWasClicked] = useState(false)

  const toggleCard = (e) => {
    setWasClicked(!wasClicked)
  }

  console.log(wasClicked);

  const source = `http://image.tmdb.org/t/p/w185/${props.poster}`

  const posterShow = wasClicked ?
    <Card onClick={toggleCard} bg="secondary" text="white" style={{ width: '18rem' }}>
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>
        <Card.Title>Score:{props.score}/10</Card.Title>
        <Card.Text>
          Review:{props.review}
        </Card.Text>
      </Card.Body>
    </Card> :
    <Card onClick={toggleCard}>
      <img alt="oh no!" src={source} />
    </Card>

  return(
    posterShow
  )

}

export default UserPageReviewCard
