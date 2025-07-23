import React from "react"
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar'; 
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Counselling from './pages/Counselling';
import About from './pages/About';
import Jobs from "./pages/Jobs";

function App() {
  return (
    <Router>
      <Navbar /> {/* Navigation bar on all pages */}
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/counselling" element={<Counselling />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs/>}/>
      </Routes>
    </Router>
  )
}

export default App
