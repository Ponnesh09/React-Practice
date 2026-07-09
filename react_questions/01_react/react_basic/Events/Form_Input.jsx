// 2. Input Change Events (onChange)Crucial for tracking user typing inside text inputs, checkboxes, or dropdown selectors.

import React, { useState } from 'react'

const Form_Input = () => {
  
      const [text, setTest] = useState("")

      let handleChange = (e)=>{
        setTest(e.target.value)
      }
  return (
    <div>
     
     <input type="text" name="input" id="input" onChange={handleChange} className='border 2px solid'></input>
     <p> typing... {text}</p>
    </div>
  )
}

export default Form_Input
