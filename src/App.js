import React , { useState, useEffect } from 'react';
import HomePage from './Pages/HomePage';
import UserPage from './Pages/UserPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from './Components/NoMatch';
import NavBar from './Components/NavBar';
import LoginPage from './Pages/LoginPage'
import Signup from './Pages/SignupPage'
import MoviePage from './Pages/MoviePage'
import MoviesList from './Components/MoviesList'
import { fetchUtils, Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
// import simpleRestProvider from 'ra-data-simple-rest';

const App = () => {

  const [username, setUsername] = useState('')

  const [loggedIn, setLoggedIn] = useState(localStorage.loggedIn)

  const [password, setPassword] = useState('')

  const [searchInput, setSearchInput] = useState('')

  const [searchedMovie, setSearchedMovie] = useState('')

  const [movies, setMovies] = useState([])

  const dataProvider = jsonServerProvider('http://localhost:3000');

  let handleChange = (e) => {
    if(e.target.name==="Username")setUsername(e.target.value)
    setPassword(e.target.value)
  }

  let logIn = (e) => {
      // login using a POST request
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    })
    .then(r => r.json())
    .then(data => {
      localStorage.setItem('token', data.jwt)
      localStorage.setItem('user_id', data.user.id)
      localStorage.setItem('username', data.user.username)
      localStorage.setItem('loggedIn', true)
    })

    alert('Logged In')

    setLoggedIn(true)
  }

  let logOut = (e) => {
    console.log("logging out");
    alert('Logged Out')
    localStorage.clear()
    setLoggedIn(false)
  }

  let searchHandler = (e) => {
    setSearchInput(e.target.value)
  }

  let searchSubmitHandler = (e) => {
    e.preventDefault()
    setSearchedMovie(searchInput)
  }

  let keyPressed = (e) => {
    e.preventDefault()
    if (e.key === "Enter") {
      searchSubmitHandler()
    }
  }

  return (
    <React.Fragment>
      <NavBar
        loggedIn={loggedIn}
        logOut={logOut}
        searchHandler={searchHandler}
        searchSubmitHandler={searchSubmitHandler}
        keyPressed={keyPressed}
      />
      <Router>
      <Switch>
        <Route exact path="/" render={(props) =>
          <HomePage
            loggedIn={loggedIn}
            searchedMovie={searchedMovie}
          />}
        />
        <Route path="/user" component={UserPage}/>
        <Route path="/admin" render={(props) =>
          <Admin dataProvider={dataProvider}>
            <Resource name="movies" list={MoviesList}/>
          </Admin>
        }/>
        <Route path="/login" render={(props) =>
          <LoginPage
            loggedIn={loggedIn}
            logOut={logOut}
            logIn={logIn}
            handleChange={handleChange}
            username={username}
            password={password}
          />
        }/>
        <Route path="/movies/:title" component={MoviePage}/>
        <Route path="/signup" component={Signup}/>
        <Route component={NoMatch} />
      </Switch>
      </Router>
    </React.Fragment>
  )

} //class App extends

export default App;
