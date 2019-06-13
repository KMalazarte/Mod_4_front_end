import React from 'react';
import logo from './logo.svg';
import './App.css';
import GamePage from './Components/GamePage';

class App extends React.Component {

  state = {
    movies: []
  }

  // headers: {
    //   "X-RapidAPI-Host": "chicken-coop.p.rapidapi.com",
    //   "X-RapidAPI-Key": "10a200601emsha3c9b87fe8d2e84p1c2abdjsn16577e6343eb"
  componentDidMount() {
    let url = ""
    // /discover/movie?sort_by=popularity.desc
    // fetch('https://api.themoviedb.org/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22')
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=be88eec84f09
    c039b6c361bdf5e07e11`)
    .then(response => response.json())
    .then(console.log)
    .then(moviesArr =>  {
      this.setState({
      movies: moviesArr})
      })
  }

  render() {
    console.log(this.state.movies);
    return (
      <div>
      <h1> Hello </h1>
      <MoviePage
      movies={this.state.movies}/>
      </div
    );
  }

} //class App extends

export default App;
