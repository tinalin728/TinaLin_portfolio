import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Project from "./pages/Project"
import Layout from "./layouts/Layout"

import Tims from "./pages/projects/Tims"
import Furry from "./pages/projects/Furry"
import Nomly from "./pages/projects/Nomly"
import FitMe from "./pages/projects/FitMe"
import Solar from "./pages/projects/Solar"
import ScrollToTop from "./layouts/ScrollToTop"

function App() {

  return (
    <Router>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/crafts" element={<Project />} />

          <Route path="/project/tim-hortons-redesign" element={<Tims />} />
          <Route path="/project/nomly" element={<Nomly />} />
          <Route path="/project/solar-system" element={<Solar />} />
          <Route path="/project/furrytales-pet-redesign" element={<Furry />} />
          <Route path="/project/fitme" element={<FitMe />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
