import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Counselling from './pages/Counselling';
import About from './pages/About';
import Jobs from "./pages/Jobs"; 
import AddJob from "./pages/AddJob";
import Login from "./pages/LOGIN/Login";
import Signup from "./pages/LOGIN/Signup";

function App() {
  return (
    <BrowserRouter basename="/">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/counselling" element={<Counselling />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/apply" element={<AddJob />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;