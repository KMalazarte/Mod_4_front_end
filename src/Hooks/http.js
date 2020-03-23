import { useState, useEffect } from 'react'

export const useHttp = (url, dependencies) => {

  const [fetchedData, setFetchedData] = useState([])

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data =>  {
        setFetchedData(data)
      })
  }, [dependencies])
  return fetchedData
}
