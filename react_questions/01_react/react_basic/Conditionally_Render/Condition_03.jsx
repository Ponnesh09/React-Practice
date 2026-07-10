// Standard if/else Statements
// Use this approach outside of your return statement 
// when the rendering logic is complex or you want to return entirely different layouts early on

import React from 'react'

const Condition_03 = ({userRole}) => {

     // Early return for Admins
  if(userRole == 'admin'){
    return <h1>
        welcome to admin page 
    </h1>
  }

  // Fallback layout for standard users
//   return <h1>Welcome to your standard client portal</h1>

  //main jsx
  return(
    <div>
<h1>Welcome to your standard client portal</h1>
    </div>
  )
  
}

export default Condition_03
