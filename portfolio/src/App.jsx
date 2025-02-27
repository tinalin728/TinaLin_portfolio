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

  return (
    <Router>
      <ScrollToTop />
      <Cursor />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Crafts />} />

          <Route path="/projects/tim-hortons-redesign" element={<Tims />} />
          <Route path="/projects/nomly" element={<Nomly />} />
          <Route path="/projects/fitme" element={<FitMe />} />
          <Route path="/projects/basics" element={<Basics />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App