import React from 'react'
import '../CSS/Button.css'

const Button = (onClick, label) => {
  return (
    <div>
        <h1>Custom Button Component</h1>
      <button className='custom-btn' onClick={onClick}>{label}</button>
    </div>
  )
}

export default Button
