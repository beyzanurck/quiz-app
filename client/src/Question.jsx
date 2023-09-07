import React, { useState } from 'react'
import Answer from './Answer'

export default function Question({quiz}) {

    const [answers, setAnswers] = useState([])

    const collectAnswers = () => {
        const allAnswers = [...quiz.incorrect_answers, quiz.correct_answer];
        allAnswers.sort();
        return allAnswers;
      };
    
     
        
  return (
    <div>
      
      <h2>{quiz.question}</h2>

      {collectAnswers().map((item, index) => (
        <Answer key={index} choice={item} />
      ))}

      
    </div>
  )
}
