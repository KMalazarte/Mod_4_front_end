import React from 'react';
import HomePage from './Pages/HomePage';
import UserPage from './Pages/UserPage';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NoMatch from './Components/NoMatch';
import NavBar from './Components/NavBar';
import LoginPage from './Pages/LoginPage'
import Signup from './Pages/SignupPage'
import MoviePage from './Pages/MoviePage'

class App extends React.Component {

  state = {
    username: '',
    password: '',
    loggedIn: false,
    searchInput: "",
    searchedMovie: "",
    movieId: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  logIn = (e) => {
      // login using a POST request
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: this.state.username,
          password: this.state.password
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

    this.setState({
      loggedIn: true
    })

  }

  logOut = () => {
    this.setState({
      loggedIn: false
    })
    alert('Logged Out')
    localStorage.clear()
  }

  searchHandler = (e) => {
    console.log(e.target.value);
    this.setState({
      searchInput: e.target.value
    })
  }

  searchSubmitHandler = (e) => {
    e.preventDefault()
    this.setState({
      searchedMovie: this.state.searchInput,
    })
  }

  keyPressed = (e) => {
    e.preventDefault()
    if (e.key === "Enter") {
      this.searchSubmitHandler()
    }
  }

  // clickHandler = (e) => {
  //   console.log("CLICKED", e.currentTarget.id);
  //   this.setState({
  //     movieId: e.currentTarget.id
  //   })
  // }

  // renderRedirect = () => {
  //  if (this.state.toMovies === true) {
  //    return <Redirect to="/movies"/>
  //  }
  // }

  render() {

    // if (this.state.toMovies === true) {
    //   return <Redirect to='/movies'/>
    // }

    return (
      <React.Fragment>
        <NavBar
          logOut={this.logOut}
          searchHandler={this.searchHandler}
          searchSubmitHandler={this.searchSubmitHandler}
          keyPressed={this.keyPressed}
        />
        <Router>
        <Switch>
          <Route exact path="/" render={(props) =>
            <HomePage
              loggedIn={this.state.loggedIn}
              searchedMovie={this.state.searchedMovie}
              clickHandler={this.clickHandler}
            />}
          />
          <Route path ="/user" component={UserPage}/>
          <Route path ="/login" render={(props) =>
          <LoginPage
              loggedIn={this.state.loggedIn}
              logOut={this.logOut}
              logIn={this.logIn}
              username={this.state.username}
              password={this.state.password}
              handleChange={this.handleChange}
            />
          }/>
          <Route path ="/movies/:title" component={MoviePage}/>
          <Route path ="/signup" component={Signup}/>
          <Route component={NoMatch} />
        </Switch>
        </Router>
      </React.Fragment>
    );
  }

} //class App extends

export default App;
