import React from 'react'

export default function Answer({choice, selectCallback}) {
  return (
    <div>
      <button onClick={ () => {selectCallback(choice)}}>{choice}</button>
    </div>
  )
}
