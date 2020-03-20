import React from 'react';
import { Form } from 'react-bootstrap';


class LoginPage extends React.Component{

  state={
    redirect: null
  }

  // handleLogin = (event) => {
  //   event.preventDefault()
  //
  //     // login using a POST request
  //   fetch('http://localhost:3000/login', {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: JSON.stringify({
  //       user: {
  //         username: this.state.username,
  //         password: this.state.password
  //       }
  //     })
  //   })
  //   .then(r => r.json())
  //   .then(data => {
  //     localStorage.setItem('token', data.jwt)
  //     localStorage.setItem('user_id', data.user.id)
  //     localStorage.setItem('username', data.user.username)
  //     localStorage.setItem('loggedIn', true)
  //   })
  //   this.props.logIn()
  //
  //   this.setState({
  //     redirect: "/user"
  //   });
  // }

  render(){

    const logInAlert = localStorage.loggedIn === "true" ? <h1> Hello, {localStorage.username}! You are logged In </h1> :
    <>
      <a href="/signup">Don't have a login? Click here to signup</a>
      <h1> Please login using the form above </h1>
    </>

    const logInBtn =  localStorage.loggedIn === "true" ? <button onClick={this.props.logOut}>Log Out</button> : <input type="submit" value="Log In" />

    return(
      <div>
        <Form onSubmit={this.props.logIn}>
          <input type="text" placeholder="Username" name="username" onChange={this.props.handleChange} />
          <input type="password" placeholder="Password" name="password" onChange={this.props.handleChange} />
          {logInBtn}
        </Form>

        {logInAlert}
      </div>
    )
  }
}

export default LoginPage
