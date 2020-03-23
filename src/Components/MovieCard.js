import React from 'react'
import { Card, Col } from 'react-bootstrap'

const MovieCard = props => {

  const source = `http://image.tmdb.org/t/p/w185/${props.movie.movie_img}`

  return(
    <Col>
      <Card key={props.movie.title} id={props.movie.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={source} />
      </Card>
      <h3 className="avg_score">{props.movie.avg_score}/10</h3>
    </Col>

  )

}

export default MovieCard


// <div id={this.props.movie.title} onClick={this.props.clickHandler}>
// <h1> Title: {this.props.movie.title} </h1>
// <img src={source} alt=""/>
// <p>Description: {this.props.movie.description}</p>
// <p>Average Score: {this.props.movie.avg_score}</p>
// <button onClick={this.props.reviewClickHandler}>Review Me </button>
// </div>
