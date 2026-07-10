// 2. Logical AND Operator (&&)
// Use this when you want to render an element only if a condition is true, and render absolutely nothing if it is false

import React from 'react'

const Condition_02 = ({unreadCount}) => {
  return (
    <div className='mailbox'>
        <h1>Inbox</h1>

        {unreadCount > 0 && <span className='badge'>{unreadCount}</span>}
      
    </div>
  )
}

export default Condition_02
