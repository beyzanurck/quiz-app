import React, { useState } from 'react'
import Answer from './Answer'

export default function Question({quiz, resultCallback}) {

    const collectAnswers = () => {
        const allAnswers = [...quiz.incorrect_answers, quiz.correct_answer];
        allAnswers.sort();
        return allAnswers;
      };
    
      const handleResponse = (choice) => {
        //console.log(choice, choice == quiz.correct_answer)
        let result = false
        if(choice == quiz.correct_answer) result = true
        resultCallback( result )
    }
        
  return (
    <div>
      
      <h2>{quiz.question}</h2>

      {collectAnswers().map((item, index) => (
        <Answer key={index} choice={item} selectCallback={handleResponse} />
      ))}

      
    </div>
  )
}
