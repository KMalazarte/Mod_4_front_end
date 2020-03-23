import React from 'react';
import { Form, Button } from 'react-bootstrap';


class LoginPage extends React.Component{

  state={
    redirect: null
  }

  render(){

    const logInAlert = localStorage.loggedIn === "true" ? <h1> Hello, {localStorage.username}! You are logged In </h1> :
    <>
      <a href="/signup">Don't have a login? Click here to signup</a>
      <h3> Please login using the form above </h3>
    </>

    const logInBtn = localStorage.loggedIn === "true" ? <Button onClick={this.props.logOut}>Log Out</Button> : <Button type="submit" value="Log In">Log In</Button>

    return(
      <div>
        <Form onSubmit={this.props.logIn}>
          <Form.Group controlId="formBasicEmail">
           <Form.Label>Username</Form.Label>
           <Form.Control onChange={this.props.handleChange} type="text" name="Username" placeholder="Please enter your username" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={this.props.handleChange} name="password" type="password" placeholder="Please enter your password" />
          </Form.Group>
          {logInBtn}
        </Form>
        {logInAlert}
      </div>
    )
  }
}

export default LoginPage
