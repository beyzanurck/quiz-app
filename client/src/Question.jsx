import React from 'react'
import Answer from './Answer'

export default function Question({quiz}) {

    

  return (
    <div>
      
      <h2>{quiz && quiz[0].question}</h2>

      {
        quiz && quiz[0].incorrect_answers.map((item, index) => (
            <Answer key={index} choice={item} />
        )) 
      }
      
    </div>
  )
}
