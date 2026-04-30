import React from 'react'
import { useState,useCallback, useEffect,useRef } from 'react'

const App = () => {
//1st step
  const [length, setLength]=useState(8)
  const [allowNumber, setAllowNumber]= useState()
  const [allowChart, setAllowChart]= useState()
  const [Password, setPassword]= useState()

{/* 7th step */}
//useRef hook
//add ref to password and copy button 
const passwordRef = useRef(null)

//2nd step
  //password generator
   // for optimized way using useCallback
const passwordGenerator = useCallback(()=>{

  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
                  //str = str + "1234567890"
  if(allowNumber) str += "1234567890"
  if(allowChart)  str += "!@#$%^&*-_+=[]{}~`"

  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1)
    pass +=  str.charAt(char)
  }
  setPassword(pass)

} ,[length,allowNumber,allowChart,setPassword])


{/* 8th step */}
const copyPasswordToClipboard =useCallback(()=>{

  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,10)
  // path
  window.navigator.clipboard.writeText(Password)
             
},[Password])

{/* 6th step */}
useEffect(()=>{
  passwordGenerator()
},[length, allowNumber, allowChart, passwordGenerator])


  return (
    <>

    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-300 text-orange-500'>
      <h1 className='text-4xl  text-center '>
            Password Generator
      </h1>
{/* 3rd step */}
      <div className='flex shadow rounded-lg overflow-hidden mb-4 mt-10'>
        <input type="text" 
                value={Password}
                className='outline-non w-full py-2 px-3 bg-gray-400 text-white'
                placeholder='Password'
                readOnly 
                ref={passwordRef}
                />
                
        <button className='outline-non bg-gray-500 text-white py-2 px-3 ml-2' onClick={copyPasswordToClipboard}>Copy</button>
      </div>

{/* 4th step */}
      <div className='flex text-sm gap-x-2'>

        <div className='flex items-center gap-x-1'>
          <input type="range"
                  min={6}
                  max={50}
                  value={length}
                  className='cursor-pointer'
                  onChange={(e)=>{setLength(e.target.value)}}
           />
          <label>Length:{length}</label>
        </div>
{/* 5th step */}

        <div className="flex items-center gap-x-2">
              <input 
              type="checkbox"
              defaultChecked = {allowNumber}
              id='numberAllow'
              onChange={()=>{setAllowNumber((prev) => !prev)}}
              />
              <label htmlFor="numberAllow">Number</label>
        </div>


        <div className='flex item-center gap-x-2'>
          <input 
          type="checkbox"
          defaultChecked = {allowChart}
          id='chartAllow'
          onChange={()=>{setAllowChart((prev) =>!prev)}}
          />
          <label htmlFor="chartAllow">Characters</label>
        </div>
      

      </div>

    </div>
      
    </>
  )
}

export default App
