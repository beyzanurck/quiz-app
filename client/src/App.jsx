import { useEffect, useState } from 'react'
import Question from './Question'
import './App.css'

function App() { 
  const [data, setData] = useState([])
  const [qindex, setQindex] = useState(0)
  const [score, setScore] = useState(0)


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
    setQindex(qindex+1)
  }

  const handleResult = (result) => {
    console.log(result)
    if (result) {
      setScore(score+1)
    }
    handleNewQuestion()


  }
  
  return (
    <>
      {data.length > 0 ? (
        <Question quiz={data[qindex]} resultCallback={handleResult} />
      ) : ` `}


      <button> {score} </button>
    </>
  )
}

export default App
