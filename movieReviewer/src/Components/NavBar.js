import React from 'react'
// import LoginPage from './Components/LoginPage'
// import Signup from './Components/Signup'
// import styled from 'styled-components'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
// import { Navbar from 'react-bootstrap'

const NavBar = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="/">Movie Reviewer</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link href="/user">Your Profile</Nav.Link>
    <Nav.Link href="/login">Login</Nav.Link>
    <Nav.Link href="/Signup">Signup</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
)

export default NavBar
