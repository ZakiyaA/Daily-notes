import React from 'react'

export const Button = ({color, title, onClick}) => {
  return (
    <button className='btn' 
      style={{backgroundColor: color}} 
      onClick= {onClick}
      > 
      {title}
    </button>
  )
}
