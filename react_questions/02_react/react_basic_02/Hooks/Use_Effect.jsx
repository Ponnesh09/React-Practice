// 2 useEffect useEffectHandles side effects like data fetching, subscriptions, or manual DOM updates.

import React, { useEffect, useState } from 'react'

const Use_Effect = () => {

const [data, setData] = useState(null)

useEffect(()=>{
    fetch("https://github.com")
    .then(res=>res.json)
    .then(data => setData(data))
},[])// Empty array means this runs once on mount

return (
        
      <div> 
        <h1>use Effect</h1>
        {data ? data.name : 'Loading....'}</div>

  )
}

export default Use_Effect
