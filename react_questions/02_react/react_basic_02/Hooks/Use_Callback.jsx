import React, { useState } from 'react'
import { useCallback } from 'react';

const productItem = React.memo(({name, addToCart})=>{
    console.log(`${name} rerendered `);
    <button onClick={()=>{ addToCart(name)}}> Add {name}</button>
    
})

const Use_Callback = () => {
    const [cart , setCart] = useState([])

    const addToCart = useCallback((item)=>{
        setCart((prevCart)=>[...prevCart, item])  
    },[])
  return (
    <div>
        <h1>use callback demo</h1>
      <productItem name="laptop" addToCart = {addToCart} />
      <p>Cart Items :{cart.length}</p>
      
          </div>
  )
}

export default Use_Callback
