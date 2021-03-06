import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import './App.css'
import { usePromiseTracker } from "react-promise-tracker"
import Loader from 'react-loader-spinner';

require('dotenv').config()

const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress &&
    <div
      style={{
         width: "100%",
         height: "100",
         display: "flex",
         justifyContent: "center",
         alignItems: "center"
       }}
     >
     <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
    </div>
  )
}

ReactDOM.render(
  <>
    <App />
    <LoadingIndicator/>
  </>, document.getElementById('root')
)
