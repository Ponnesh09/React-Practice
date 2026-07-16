import React, { useState } from 'react'
import { useMemo } from 'react'

const Use_Memo = ({items}) => {
    const [filter, setFilter]= useState("")

    const filteredItem = useMemo(()=>{
        return items.filter(item => item.includes(filter));
    },[items, filter])

  return (
    <div>
      <input type="text" value={filter} onChange={(e)=>setFilter(e.target.value)}/>

      <ul>
        {filteredItem.map((item, index)=>{
            <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default Use_Memo
