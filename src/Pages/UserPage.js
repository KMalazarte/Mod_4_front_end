import React from 'react'

class UserPage extends React.Component {

  state={
    reviews: []
  }

  render() {
    let src = "URL"
    return(
      <div>
        <h1> {localStorage.username}'s PAGE </h1>
        <img src={src} alt=""/>
        <ul> REVIEWS YOU HAVE CREATED: </ul>
          <li> review 1 </li>
          <li> review 2 </li>
      </div>
    )
  }
}

export default UserPage
