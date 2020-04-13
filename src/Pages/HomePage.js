import React from 'react'
import MovieContainer from '../Components/MovieContainer'
import { Container, Form, FormControl, Button } from 'react-bootstrap'

const HomePage = props => {

  let filtered =  props.movies.filter(movie => movie.title.toLowerCase().includes(props.searchedMovie.toLowerCase()))

  if (props.searchedMovie){
    return(
      <Container fluid>
        <div id="search-div">
          <Form onSubmit={props.searchSubmitHandler} id="movie-search-form">
            <FormControl
              onChange={props.searchHandler}
              type="text"
              placeholder="Type a movie in here"
              className="mr-sm-2"
            />
            <Button type="submit" variant="outline-success">Search</Button>
          </Form>
        </div>
          <MovieContainer
            movies={filtered}
          />
      </Container>
    )
  } else {
    return(
      <Container fluid>
        <div id="search-div">
          <Form onSubmit={props.searchSubmitHandler} id="movie-search-form">
            <FormControl
              onChange={props.searchHandler}
              type="text"
              placeholder="Type a movie in here"
              className="mr-sm-2"
            />
            <Button type="submit" variant="outline-success">Search</Button>
          </Form>
        </div>
        <MovieContainer
          movies={props.movies}
        />
      </Container>
    )
  }

}

export default HomePage
