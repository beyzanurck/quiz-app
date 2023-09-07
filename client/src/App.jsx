import { useEffect, useState } from 'react'
import './App.css'

function App() { 

  const [data, setData] = useState('')

  const getData = async () => {
    const response = await fetch("http://localhost:3000/animals");
    const responseData = await response.json();
    console.log(responseData.results)

    setData(responseData.results)
  }


  useEffect(() => {
    getData();
  }, [])
  
  return (
    <>
      <p>{(data !== undefined && data[0] !== undefined) ? data[0].question : ""}</p>
    </>
  )
}

export default App
