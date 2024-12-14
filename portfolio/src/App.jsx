import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Crafts from './pages/Crafts'
import Layout from './layouts/Layout'
import CraftDetail from './pages/CraftDetail'
import ScrollToTop from './hooks/ScrollToTop'
import SmoothScrolling from './components/SmoothScrolling'
import { ParallaxProvider } from "react-scroll-parallax";

import Cursor from './components/Cursor'


function App() {

  return (
    <Router>
      <SmoothScrolling>
        <ParallaxProvider>
          <ScrollToTop />
          <Cursor />
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/crafts' element={<Crafts />} />
              <Route path='/crafts/:id' element={<CraftDetail />} />
            </Route>
          </Routes>
        </ParallaxProvider>

      </SmoothScrolling >
    </Router>
  )
}

export default App
