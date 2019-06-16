import React from 'react'
import MovieContainer from '../Components/MovieContainer';
import { Container, Row, Col } from 'react-bootstrap';

class MainPage extends React.Component {

  state = {
    movies: [],
    selectedMovie: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(moviesArr =>  {
      // console.log(moviesArr.movies);
      this.setState({
      movies: moviesArr.movies
      })
    })
  }

  clickHandler = (e) => {
    let selectedMovie = this.state.movies.find(movie => movie.title === e.currentTarget.id)
    this.setState({
      selectedMovie: selectedMovie
    })
  }

  // reviewClickHandler = (e) => {
  //
  // }

  render() {
    // console.log();
      return(
        <Container fluid>
          <Row>
            <Col>
              <h1> Look at all these chickens MOVIE PAGE </h1>
              <MovieContainer
              movies={this.state.movies}
              clickHandler={this.clickHandler}
              selectedMovie={this.state.selectedMovie}
              />
            </Col>
            <Col>
            </Col>
          </Row>
        </Container>
      )
  }

} //class MoviePage extends

export default MainPage
