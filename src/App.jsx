import React from 'react'
import { Routes, Route } from 'react-router'
import Crypto from './Components/Crypto'
import Navbar from './Components/Navbar'
import MarketPage from './pages/MarketPage'
import Features from './pages/Features'
import AboutPage from './pages/AboutPage'

const App = () => {
  return (
    <div className='app'>
      
      <Routes>
        <Route path="/" element={<Crypto />} />
        <Route path="/market" element={<MarketPage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/whitepapers" element={<div>White Papers Page</div>} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  )
}

export default App