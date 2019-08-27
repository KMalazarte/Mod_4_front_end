import { useState, useEffect } from 'react'

export const useHttp = (url, dependencies) => {

  const [fetchedData, setFetchedData]= useState([])

  // fetch("http://localhost:3000/movies")
  useEffect(() => {
    console.log("sending http request");
    fetch(url)
      .then(response => response.json())
      .then(data =>  {
        setFetchedData(data)
      })
  }, dependencies)
  return [fetchedData]
}
