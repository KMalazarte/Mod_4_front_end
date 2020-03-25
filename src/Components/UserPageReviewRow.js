import React from 'react'
import { Link } from 'react-router-dom';

const UserPageReviewRow = props => {

  const source = `http://image.tmdb.org/t/p/w92/${props.poster}`

  const movieRow =
    <tr>
      <Link to={`/movies/${props.slug}`}>
        <td><img src={source} alt=''/></td>
      </Link>
      <td className="table_cell">
        <Link to={`/movies/${props.slug}`}>
          {props.title}
        </Link>
      </td>
      <td className="table_cell">{props.score}</td>
      <td className="table_cell">{props.review}</td>
    </tr>


  return(
    movieRow
  )

}

export default UserPageReviewRow
