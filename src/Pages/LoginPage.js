import React from 'react';
import { Form } from 'react-bootstrap';


class LoginPage extends React.Component{

  state={
    redirect: null
  }

  render(){

    console.log(this.props);

    const logInAlert = localStorage.loggedIn === "true" ? <h1> Hello, {localStorage.username}! You are logged In </h1> :
    <>
      <a href="/signup">Don't have a login? Click here to signup</a>
      <h1> Please login using the form above </h1>
    </>

    const logInBtn = localStorage.loggedIn === "true" ? <button onClick={this.props.logOut}>Log Out</button> : <input type="submit" value="Log In" />

    return(
      <div>
        <Form onSubmit={this.props.logIn}>
          <input type="text" placeholder="Username" name="Username" onChange={this.props.handleChange} />
          <input type="password" placeholder="Password" name="Password" onChange={this.props.handleChange} />
          {logInBtn}
        </Form>
        {logInAlert}
      </div>
    )
  }
}

export default LoginPage
