import React from 'react'

export default function Question({question, correct_answer, incorrect_answers}) {
  return (
    <div>
      <h3>{question}</h3>
      <p>{correct_answer}</p>
      <p>{incorrect_answers[0]}</p>
    </div>
  )
}
