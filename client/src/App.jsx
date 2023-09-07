import { useEffect, useState } from 'react'
import Question from './Question'
import './App.css'

function App() { 
  const [data, setData] = useState([])

  const getData = async () => {
    const response = await fetch("http://localhost:3000/animals");
    const responseData = await response.json();
    console.log(responseData.results)

    setData(responseData.results)
  }

  useEffect(() => {
    getData();
  }, [])

  const handleNewQuestion = () => {

  }


  
  return (
    <>
      {data.length > 0 ? (
        <Question quiz={data[0]} />
      ) : ` `}


      {/* <button onClick={handleNewQuestion}>Click</button> */}
    </>
  )
}

export default App
