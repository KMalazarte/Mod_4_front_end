import React from 'react'
import { Link } from 'react-router-dom';

const UserPageReviewRow = props => {

  const source = `http://image.tmdb.org/t/p/w92/${props.poster}`

  const movieRow =
    <tr>
      <Link to={`/movies/${props.movieId}`}>
        <td><img src={source} alt=''/></td>
      </Link>
      <td className="table_cell">
        <Link to={`/movies/${props.movieId}`}>
          {props.title}
        </Link>
      </td>
      <td className="table_cell">{props.score}</td>
      <td className="table_cell">{props.review}</td>
    </tr>


  return(
    movieRow
  )
  // <Link to={`/movies/${fixedTitle(props.title)}`}>
  // <Card bg="secondary" text="white">
  // <Card.Header>{props.title}</Card.Header>
  // <Card.Body>
  // <Card.Title>Score:{props.score}/10</Card.Title>
  // <Card.Text>
  // Review:{props.review}
  // </Card.Text>
  // </Card.Body>
  // </Card>
  // </Link>

}

export default UserPageReviewRow
