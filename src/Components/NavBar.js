import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

const NavBar = props => {

  let loggedInNavBar

  let admin

  if(localStorage.admin === "true"){
    admin =
      <>
        <Nav className="mr-auto">
          <Nav.Link href="/admin">Admin</Nav.Link>
        </Nav>
      </>
  }

  if(props.loggedIn){
    loggedInNavBar =
      <>
        <Nav className="mr-auto">
          <Nav.Link href="/user">{localStorage.username}'s Reviews</Nav.Link>
          {admin}
        </Nav>
        <Nav>
          <Nav.Link onClick={props.logOut}>Logout?</Nav.Link>
        </Nav>
      </>
  } else {
    loggedInNavBar =
      <>
        <Nav className="mr-auto">
          <Nav.Link href="/user">Your Reviews</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </>
  }

  return(
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Movie Reviewer</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {loggedInNavBar}
      <Nav>
        <Form onSubmit={props.searchSubmitHandler} inline>
          <FormControl
            onChange={props.searchHandler}
            type="text"
            placeholder="Type a movie in here"
            className="mr-sm-2"
          />
          <Button type="submit" variant="outline-success">Search</Button>
        </Form>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

// <Nav.Link href="/login">Login</Nav.Link>
// <Nav.Link href="/Signup">Signup</Nav.Link>
export default NavBar
