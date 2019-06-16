import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './Components/MainPage';
import UserPage from './Components/UserPage'

class App extends React.Component {
  render() {
    return (
      <div>
        <MainPage />
        <UserPage />
      </div>
    );
  }

} //class App extends

export default App;
