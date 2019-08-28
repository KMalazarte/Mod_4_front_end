import React from 'react'
import { Card } from 'react-bootstrap'


const MovieCard = props => {

    const source = `http://image.tmdb.org/t/p/w185/${props.movie.movie_img}`

    return(
      <Card key={props.movie.title} id={props.movie.title} onClick={props.clickHandler} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={source} />
      </Card>
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
