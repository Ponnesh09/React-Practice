import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import ProductList from '../components/ProductList'

const App = () => {
  const [search, setSearch]= useState('')

  const products = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Headphone",
  ];

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

      
    </div>
  )
}

export default App
