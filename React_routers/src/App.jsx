import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Notfound from './pages/Notfound'
import Courses from './pages/Courses'

import Products from './pages/Products'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'



const App = () => {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />}>
            <Route path="men" element={<Men />} />
            <Route path="women" element={<Women />} />
            <Route path="kids" element={<Kids />} />
          </Route>
          <Route path="/courses/:id?" element={<Courses />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
    </div>
  )
}

export default App
