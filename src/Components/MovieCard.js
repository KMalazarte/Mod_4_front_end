import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const MovieCard = props => {

  const source = `http://image.tmdb.org/t/p/w185/${props.movie.movie_img}`

  return(
    <Col>
      <Card key={props.movie.title} id={props.movie.id} style={{ width: '18rem' }}>
        <Link to={`/movies/${props.movie.slug}`}>
          <Card.Img variant="top" src={source} />
        </Link>
      </Card>
      <h3 className="avg_score">{props.movie.avg_score}/10</h3>
    </Col>

  )

}

export default MovieCard
