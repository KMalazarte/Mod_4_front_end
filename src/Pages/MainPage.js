import React from 'react'
import { useState } from 'react'
import MovieContainer from '../Components/MovieContainer'
import { Container } from 'react-bootstrap'
import MoviePage from './MoviePage'
import { useHttp } from '../Hooks/http'

const MainPage = props => {

  // state = {
  //   movies: [],
  //   selectedMovie: "",
  // }
  const [selectedMovie, setSelectedMovie] = useState("")

  const movies = useHttp(`http://localhost:3000/movies`, [])

  // componentDidMount() {
  //   fetch("http://localhost:3000/movies")
  //   .then(response => response.json())
  //   .then(moviesArr =>  {
  //     // console.log(moviesArr.movies);
  //     this.setState({
  //     movies: moviesArr.movies
  //     })
  //   })
  // }

  const clickHandler = (e) => {
    let clickedMovie = movies[0].find(movie => movie.title === e.currentTarget.id)
    setSelectedMovie(clickedMovie)
  }


        if (selectedMovie === "") {
        return(
          <Container className="bg" fluid>
                <MovieContainer
                movies={movies}
                clickHandler={clickHandler}
                />
          </Container>
        )
      } else {
          return(
            <Container fluid>
                <MoviePage
                selectedMovie={selectedMovie}
                loggedIn={props.loggedIn}
                />
            </Container>
          )
        } // else

} //class MoviePage extends

export default MainPage
