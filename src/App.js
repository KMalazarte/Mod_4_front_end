import React from 'react';
import MainPage from './Pages/MainPage';
import UserPage from './Pages/UserPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from './Components/NoMatch';
import NavBar from './Components/NavBar';
import LoginPage from './Components/LoginPage'
import Signup from './Components/Signup'

class App extends React.Component {
  state = {
    loggedIn: false
  }

  logIn = () => {
    this.setState({
      loggedIn: true
    })
    alert('Logged In')
  }

  logOut = () => {
    this.setState({
      loggedIn: false
    })
    alert('Logged Out')
    localStorage.clear()
  }

  render() {
    return (
      <React.Fragment>
          <NavBar />
            <Router>
              <Switch>
                <Route exact path="/" render={() => <MainPage loggedIn={this.state.loggedIn} />} />
                <Route path ="/user" component={UserPage}/>
                <Route path ="/login" render={() => <LoginPage loggedIn={this.state.loggedIn} logOut={this.logOut} logIn={this.logIn} />}/>
                <Route path ="/signup" component={Signup}/>
                <Route component={NoMatch} />
              </Switch>
            </Router>
        </React.Fragment>
    );
  }

} //class App extends

export default App;
