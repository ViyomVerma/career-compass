import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Counselling from './pages/Counselling';
import About from './pages/About';
import Jobs from "./pages/Jobs"; 
import AddJob from "./pages/AddJob";

function App() {
  return (
    <BrowserRouter basename="/career-compass">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/counselling" element={<Counselling />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/apply" element={<AddJob />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;