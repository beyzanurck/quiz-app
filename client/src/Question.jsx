import React, { useState } from 'react'
import Answer from './Answer'

export default function Question({quiz}) {

    const [answers, setAnswers] = useState([])

    const collectAnswers = () => {
        const allAnswers = [...quiz[0].incorrect_answers, quiz[0].correct_answer];
        return allAnswers;
      };
    
        
  return (
    <div>
      
      <h2>{quiz[0].question}</h2>

      {collectAnswers().map((item, index) => (
        <Answer key={index} choice={item} />
      ))}

      
    </div>
  )
}
