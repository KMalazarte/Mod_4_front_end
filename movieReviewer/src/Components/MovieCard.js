import React from 'react'
import { Card } from 'react-bootstrap'


class MovieCard extends React.Component {

  render() {
    // console.log(this.props);
    const source = `http://image.tmdb.org/t/p/w185/${this.props.movie.movie_img}`
    // console.log(this.props.movie);
    return(
      <Card key={this.props.movie.title} id={this.props.movie.title} onClick={this.props.clickHandler} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={source} />
      </Card>
  )}
}

export default MovieCard


// <div id={this.props.movie.title} onClick={this.props.clickHandler}>
// <h1> Title: {this.props.movie.title} </h1>
// <img src={source} alt=""/>
// <p>Description: {this.props.movie.description}</p>
// <p>Average Score: {this.props.movie.avg_score}</p>
// <button onClick={this.props.reviewClickHandler}>Review Me </button>
// </div>
