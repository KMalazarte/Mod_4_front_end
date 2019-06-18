import React from 'react';

class LoginPage extends React.Component{
  state={
  username: '',
  password: '',
  token: ''
}

    // componentDidMount() {
    //   fetch('http://localhost:3000/profile', {
    //     method: 'GET',
    //     headers: {
    //       Authorization: `Bearer ${this.state.token}`
    //     }
    //   })
    //   .then(response => response.json())
    //   .then(console.log)
    // }

handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

  handleLogin = (event) => {
    event.preventDefault()

    // login using a POST request
    fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      user: {
        username: this.state.username,
        password: this.state.password
      }
    })
  })
  .then(r => r.json())
  .then(data => {
    console.log(data)
    localStorage.setItem('token', data.jwt)
    localStorage.setItem('user_id', data.user.id)
    localStorage.setItem('username', data.user.username)
  })
  }

  render(){

    return(
      <form onSubmit={this.handleLogin}>
          <input type="text" name="username" onChange={this.handleChange} />
        <input type="password" name="password" onChange={this.handleChange} />

        <input type="submit" value="Log In" />
      </form>
    )
  }
}

export default LoginPage
