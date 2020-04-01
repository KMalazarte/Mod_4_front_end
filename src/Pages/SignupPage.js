import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Redirect } from "react-router-dom"

class Signup extends React.Component{
  state={
    username: '',
    password: '',
    redirectToReferrer: false
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSignup = (event) => {
    event.preventDefault()
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: this.state.username,
          password: this.state.password,
        }
      })
    })
    .then(resp => resp.json())
    .then(resp => resp.jwt ? resp : false)
    .then(resp => {
      if(resp){
        alert(`Thanks for signing up ${this.state.username}!`)
        this.setState({
          redirectToReferrer: true
        })
      } else {
        alert("Sorry that username is already in use, please try again")
      }
    })
  }

  render(){
    const redirectToReferrer = this.state.redirectToReferrer;
       if (redirectToReferrer === true) {
           return <Redirect to="/login" />
       }
    return(
      <Form onSubmit={this.handleSignup}>
        <Form.Group controlId="formBasicEmail">
         <Form.Label>Username</Form.Label>
         <Form.Control onChange={this.handleChange} type="text" name="username" placeholder="Please enter a username" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={this.handleChange} name="password" type="password" placeholder="Please enter a password" />
        </Form.Group>
        <Button variant="primary" type="submit" value="Signup">
          Submit
        </Button>
      </Form>
    )
  }
}

export default Signup
