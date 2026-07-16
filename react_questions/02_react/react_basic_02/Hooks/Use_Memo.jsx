import React, { useMemo } from 'react'

const Use_Memo = ({number}) => {
  const calculationValue = (num)=>{

    let total = 0
    for(let i = 0; i< 1000000000; i++){
      total =+ num;
      return total
    }
  }

  const memoizedValue = useMemo(()=> calculationValue(number),[number])
  return (
    <div>
      result : {memoizedValue}
    </div>
  )
}

export default Use_Memo
