import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
  }

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <label>Filter by Category: </label>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList
        selectedCategory={selectedCategory}
        addToCart={addToCart}
      />

      <Cart cart={cart} />
    </div>
  )
}

export default App
