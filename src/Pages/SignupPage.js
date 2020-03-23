import React from 'react';
import { Form, Button } from 'react-bootstrap';

class Signup extends React.Component{
  state={
    username: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSignup = (event) => {
    event.preventDefault()
    fetch('https://movie-reviewer-api.herokuapp.com/users', {
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
    .then(r => r.json())
    .then(r => console.log(r))
    alert(`Welcome ${this.state.username}`)

  }

  // <Form>
  //   <Form.Group controlId="formBasicEmail">
  //     <Form.Label>Email address</Form.Label>
  //     <Form.Control type="email" placeholder="Enter email" />
  //     <Form.Text className="text-muted">
  //       We'll never share your email with anyone else.
  //     </Form.Text>
  //   </Form.Group>
  //
  //   <Form.Group controlId="formBasicPassword">
  //     <Form.Label>Password</Form.Label>
  //     <Form.Control type="password" placeholder="Password" />
  //   </Form.Group>
  //   <Form.Group controlId="formBasicCheckbox">
  //     <Form.Check type="checkbox" label="Check me out" />
  //   </Form.Group>
  //   <Button variant="primary" type="submit">
  //     Submit
  //   </Button>
  // </Form>

  render(){
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

// <input type="text"  name="username" onChange={this.handleChange} />
// <input type="password" placeholder="Please enter a password" name="password" onChange={this.handleChange} />
// <input type="submit" value="Signup" />
export default Signup
