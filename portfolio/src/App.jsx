import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/About'
import Crafts from './pages/Crafts'
import Layout from './layouts/Layout'
import CraftDetail from './pages/CraftDetail'
import ScrollToTop from './hooks/ScrollToTop'
import SmoothScrolling from './components/SmoothScrolling'


function App() {

  return (
    <SmoothScrolling>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/crafts' element={<Crafts />} />
            <Route path='/crafts/:id' element={<CraftDetail />} />
          </Route>
        </Routes>
      </Router>
    </SmoothScrolling>
  )
}

export default App
