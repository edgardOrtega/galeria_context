
import { useState } from 'react'
import './App.css'
import { Navigation } from './components/Navigation'
import { Cart } from './pages/Cart'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <Navigation/>
      <h1>COMPONENTE APP</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  )
}

export default App
