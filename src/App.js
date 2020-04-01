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
import MovieEdit from './Components/MovieEdit'
import MovieCreate from './Components/MovieCreate'
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
// import dataProvider from './Components/dataProvider.js';
import { trackPromise } from "react-promise-tracker";

const App = () => {

  const [username, setUsername] = useState('')

  const [loggedIn, setLoggedIn] = useState(localStorage.loggedIn)

  const [password, setPassword] = useState('')

  const [searchInput, setSearchInput] = useState('')

  const [searchedMovie, setSearchedMovie] = useState('')

  const [movies, setMovies] = useState([])

  const [redirect, setRedirect] = useState(false)

  let myAPI = process.env.REACT_APP_API_ENDPOINT

  useEffect(() => {

    let fetchMovies = async () => {
      const fetchData = await fetch(`${myAPI}/movies`)
      let data = await fetchData.json()
      setMovies(data)
    }

    trackPromise(fetchMovies())
  }, [myAPI])

  const dataProvider = jsonServerProvider(`${myAPI}`);

  let handleChange = (e) => {
    if(e.target.name==="Username")setUsername(e.target.value)
    setPassword(e.target.value)
  }

  let logIn = (e) => {
    e.preventDefault()
      // login using a POST request
    fetch(`${myAPI}/login`, {
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
    .then(data => data.message ? false : data)
    .then(data => {
      if(data){
        localStorage.setItem('token', data.jwt)
        localStorage.setItem('user_id', data.user.id)
        localStorage.setItem('username', data.user.username)
        localStorage.setItem('loggedIn', true)
        localStorage.setItem('admin', data.admin)

        setUsername(data.user.username)
        alert(`Hi ${username}, you are logged in!`)

        setLoggedIn(true)
        setRedirect(true)
      } else {
        alert(`Please make sure the username and password you entered are correct`)
      }
    })

  }

  let logOut = (e) => {
    e.preventDefault()
    alert(`Bye, ${username}. See you next time!`)
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
        username={username}
        keyPressed={keyPressed}
      />
      <Router>
      <Switch>
        <Route exact path="/" render={(props) =>
          <HomePage
            loggedIn={loggedIn}
            movies={movies}
            searchedMovie={searchedMovie}
          />}
        />
        <Route path="/user" component={UserPage}/>
        <Route path="/admin" render={(props) =>
          <Admin dataProvider={dataProvider}>
            <Resource name="movies" list={MoviesList} edit={MovieEdit} create={MovieCreate}/>
          </Admin>
        }/>
        <Route path="/login" render={(props) =>
          <LoginPage
            redirect={redirect}
            loggedIn={loggedIn}
            logOut={logOut}
            logIn={logIn}
            handleChange={handleChange}
            username={username}
            password={password}
          />
        }/>
        <Route path="/movies/:id" component={MoviePage}/>
        <Route path="/signup" component={Signup}/>
        <Route component={NoMatch} />
      </Switch>
      </Router>
    </React.Fragment>
  )

}

export default App;
