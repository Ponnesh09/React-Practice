import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import ProductList from '../components/ProductList'
import CounterButton from '../components/CounterButtons'
import CounterDisplay from '../components/CounterDisplay'

const App = () => {
  const [search, setSearch]= useState('')

  const products = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Headphone",
    "apply",
    "mango",
    "banana",
  ];

  const [count ,setCount] = useState(0)

  return (
    <div>
      <h1 className='text-2xl font-size-lg'>React App</h1>
      <h2>Search Product</h2>

      <SearchBar
      search={search}
      setSearch={setSearch} 
      />

      <ProductList 
      product ={products}
      productSearch={search}
      />

      <CounterButton.jsx 
      count={count}
      />

      <CounterDisplay 
      count={count}
      setCount={setCount}
      />
      
    </div>
  )
}

export default App
