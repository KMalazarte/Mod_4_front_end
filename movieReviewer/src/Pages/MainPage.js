import React from 'react'
import MovieContainer from '../Components/MovieContainer';
import { Container } from 'react-bootstrap';
import MoviePage from './MoviePage'

class MainPage extends React.Component {

  state = {
    movies: [],
    selectedMovie: "",
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
    // console.log(e.currentTarget.id);
    let selectedMovie = this.state.movies.find(movie => movie.title === e.currentTarget.id)
    this.setState({
      selectedMovie: selectedMovie
    })
  }

  // reviewClickHandler = (e) => {
  //
  // }

  render() {
        if (this.state.selectedMovie === "") {
        return(
          <Container className="bg" fluid>
              <h1> MAIN PAGE </h1>
                <MovieContainer
                movies={this.state.movies}
                clickHandler={this.clickHandler}
                />
          </Container>
        )
      } else {
          return(
            <Container fluid>
                <MoviePage
                selectedMovie={this.state.selectedMovie}
                />
            </Container>
          )
        } // else


  } //render

} //class MoviePage extends

export default MainPage
