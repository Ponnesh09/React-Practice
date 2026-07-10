// 1. Ternary Operator (condition ? true : false)
// Use this inside your JSX when you need an either/or scenario (e.g., toggling between two states).


import React, { useState } from 'react'

const Condition_01 = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
      {isLoggedIn ? <button>Log out</button> : <button>log in</button>}
    </div>
  )
}

export default Condition_01
