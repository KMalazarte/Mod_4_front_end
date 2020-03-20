import React from 'react'
import { useState, useEffect } from 'react'
import MovieContainer from '../Components/MovieContainer'
import { Container } from 'react-bootstrap'
import MoviePage from './MoviePage'
import { useHttp } from '../Hooks/http'

const HomePage = props => {

  useEffect(() => {
    fetchMovies()
  }, [])

  const [selectedMovie, setSelectedMovie] = useState("")

  const [movies, setMovies] = useState([])

  let fetchMovies = async () => {
    const fetchData = await fetch(`http://localhost:3000/movies`)
    const data = await fetchData.json()
    setMovies(data)
  }

  if (props.searchedMovie !== ""){
    let filtered = movies.filter(movie => movie.title.toLowerCase().includes(props.searchedMovie.toLowerCase()))
    setMovies(filtered)
  }

  const clickHandler = (e) => {
    let clickedMovie = movies.find(movie => movie.title === e.currentTarget.id)
    setSelectedMovie(clickedMovie)
  }

    return(
      <Container className="bg" fluid>
        <MovieContainer
          movies={movies}
          clickHandler={props.clickHandler}
        />
      </Container>
    )


}

export default HomePage
