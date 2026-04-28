import React, { useState } from 'react'
import './App.css'

const App = () => {

  // let counter = 10
  // initial value 10 (counter)

  //using useState
  const [counter , setCounter] = useState(10)

  const addValue = ()=>{
    console.log("clicked", counter);
    // counter = counter + 1;
    // counter += 1;

    // using useState to update counter  setCounter == update the value
    // setCounter(counter + 1)

    //This is called a functional update.
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)

    //setting limits to 20
    setCounter(prev => {
      if(prev < 20 ){
        return prev + 1;
      }
      return prev
    })
  }

  const removeValue = ()=>{
    // setCounter(counter - 1)
    setCounter(prev => {
      if(prev > 0 ){
        return prev - 1;
      }
      return prev
    })

  }
  // added value 

  return (
    <>
       <h1>Counter Update</h1>
       <h2>Counter value : {counter}</h2>
       <button 
       onClick={addValue}>
        Add Value {counter}</button> 
       {/* we created addValue, then it inject to add value button*/}
       <button onClick={removeValue}>Remove Value {counter}</button>
       <p>Footer {counter}</p>
    </>
  )
}

export default App
