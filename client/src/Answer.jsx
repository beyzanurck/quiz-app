import React from 'react'
import './Answer.css';

export default function Answer({choice, selectCallback}) {
  return (
    <div className='answer_buttons'>
      <button onClick={ () => {selectCallback(choice)}}>{choice}</button>
    </div>
  )
}
