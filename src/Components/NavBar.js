import React from 'react'
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap'

const NavBar = props => {

  let loggedIn

  if(localStorage.loggedIn){
    loggedIn =
      <>
        <Nav className="mr-auto">
          <Nav.Link href="/user">{localStorage.username}'s' Reviews</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link onClick={props.logOut}>Logout?</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Type a movie in here" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </>
  } else {
    loggedIn =
      <>
        <Nav className="mr-auto">
          <Nav.Link href="/user">Your Reviews</Nav.Link>
        </Nav>
        <Nav>
        <Nav.Link href="/login">Login</Nav.Link>
          <Form inline>
            <FormControl type="text" placeholder="Type a movie in here" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Nav>
      </>
  }
  return(
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Movie Reviewer</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {loggedIn}
      </Navbar.Collapse>
    </Navbar>
  )
}

// <Nav.Link href="/login">Login</Nav.Link>
// <Nav.Link href="/Signup">Signup</Nav.Link>
export default NavBar
