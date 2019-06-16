import React from 'react';
import MainPage from './Pages/MainPage';
import UserPage from './Pages/UserPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from './Components/NoMatch';
import NavBar from './Components/NavBar';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
          <NavBar />
            <Router>
              <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path ="/user" component={UserPage}/>
                <Route component={NoMatch} />
              </Switch>
            </Router>
        </React.Fragment>
    );
  }

} //class App extends

export default App;
