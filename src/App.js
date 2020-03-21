import React , { useState, useEffect } from 'react';
import HomePage from './Pages/HomePage';
import UserPage from './Pages/UserPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from './Components/NoMatch';
import NavBar from './Components/NavBar';
import LoginPage from './Pages/LoginPage'
import Signup from './Pages/SignupPage'
import MoviePage from './Pages/MoviePage'
import { fetchUtils, Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import simpleRestProvider from 'ra-data-simple-rest';

const App = () => {

  const [username, setUsername] = useState('')

  const [loggedIn, setLoggedIn] = useState(localStorage.loggedIn)

  const [password, setPassword] = useState('')

  const [searchInput, setSearchInput] = useState('')

  const [searchedMovie, setSearchedMovie] = useState('')

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchMovies()
  }, [])

  // The X-Total-Count header is missing in the HTTP Response. The jsonServer Data Provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare X-Total-Count in the Access-Control-Expose-Headers header?

  // const fetchJson = (url, options = {}) => {
  //   if (!options.headers) {
  //     options.headers = new Headers({ Accept: 'application/json' });
  //   }
  //   // add your own headers here
  //   options.headers.set('X-Total-Count', '30');
  //   return fetchUtils.fetchJson(url, options);
  // }
  //
  // const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

  // let fetchMovies = app.get("/movies", async (req, res) => {
  //   const total = await Movies.count();
  //   res.header('Access-Control-Expose-Headers', 'X-Total-Count')
  //   res.set("x-total-count", total);
  //   res.send(data);
  // });

  let fetchUsers = async () => {
    const fetchData = await fetch(`https://jsonplaceholder.typicode.com/users`)
    console.log(fetchData
    );
    let data = await fetchData.json()
  }

  const dataProvider = jsonServerProvider('http://localhost:3000');

  let fetchMovies = async () => {
    // const fetchData = await fetch(`http://localhost:3000/movies`)
    // console.log(fetchData);
    // let data = await fetchData.json()
    // setMovies(data)
  }

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
            <Resource name="users" list={ListGuesser} />
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
