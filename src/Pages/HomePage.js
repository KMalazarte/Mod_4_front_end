import React from 'react'
import { useState, useEffect } from 'react'
import MovieContainer from '../Components/MovieContainer'
import { Container } from 'react-bootstrap'

const HomePage = props => {

  useEffect(() => {
    fetchMovies()
  }, [])

  const [movies, setMovies] = useState([])

  let fetchMovies = async () => {
    const fetchData = await fetch(`https://movie-reviewer-api.herokuapp.com/movies`)
    let data = await fetchData.json()
    setMovies(data)
  }

  let filtered =  movies.filter(movie => movie.title.toLowerCase().includes(props.searchedMovie.toLowerCase()))

  if (props.searchedMovie){
    return(
      <Container className="bg" fluid>
        <MovieContainer
          movies={filtered}
        />
      </Container>
    )
  } else {
    return(
      <Container className="bg" fluid>
        <MovieContainer
          movies={movies}
        />
      </Container>
    )
  }

}

export default HomePage
