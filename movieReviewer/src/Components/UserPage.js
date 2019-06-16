import React from 'react'

class UserPage extends React.Component {

  render() {
    let src = "URL"
    return(
      <div>
        <h1> USER PAGE </h1>
        <p> Username </p>
        <img src={src} alt="Image picture goes here" />
        <ul> REVIEWS </ul>
          <li> review 1 </li>
          <li> review 2 </li>
      </div>
    )
  }
}

export default UserPage
