import React from 'react'
import './App.css'

export default function Answer({choice, selectCallback}) {
  return (
    
      <button onClick={ () => {selectCallback(choice)}} className='buttons'>{choice}</button>
    
  )
}
