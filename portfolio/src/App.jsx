import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Crafts from './pages/Crafts'
import Layout from './layouts/Layout'
import ScrollToTop from './hooks/ScrollToTop'
import Cursor from './components/Cursor'

import Tims from "./pages/projects/Tims"
import Nomly from "./pages/projects/Nomly"
import FitMe from "./pages/projects/FitMe"
import Basics from "./pages/projects/Basics"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <Cursor />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/crafts' element={<Crafts />} />

          <Route path="/crafts/tim-hortons-redesign" element={<Tims />} />
          <Route path="/crafts/nomly" element={<Nomly />} />
          <Route path="/crafts/fitme" element={<FitMe />} />
          <Route path="/crafts/basics" element={<Basics />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App