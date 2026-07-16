// 3. useRefPersists values between renders without triggering a re-render. Commonly used to reference DOM elements directly.

import React from 'react'
import { useRef } from 'react'

const Use_Ref = () => {
    const inputRef = useRef(null)

    const handleClick = ()=>{
        inputRef.current.focus();
    }

  return (
    <div>
        <h1>use Ref</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>focus on the Input filed  </button>
    </div>
  )
}

export default Use_Ref




