import React from 'react';

class LoginPage extends React.Component{
  state={
  username: '',
  password: ''
}

// componentDidMount() {
// if (!!localStorage.getItem("token")) {
//   }
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
    localStorage.setItem('token', data.token, 'user_id', data.user_id)
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
