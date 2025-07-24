import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiBrain } from "react-icons/bi";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi"; // ✅ Added mobile menu icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // ✅ State for toggling mobile menu

  return (
    <nav className="bg-gradient-to-r from-emerald-100 to-emerald-800 text-white p-4 md:p-6 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className='flex items-center gap-3 px-3'>
          <BiBrain className='text-emerald-950 text-4xl sm:text-3xl' />
          <h1 className="text-2xl md:text-3xl  font-bold font-serif text-emerald-950">CareerCompass</h1>
        </div>

        {/* Menu Button for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <HiX className="text-3xl text-emerald-50" /> : <HiOutlineMenuAlt3 className="text-3xl text-emerald-50" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-bold">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/quiz" className="hover:underline">Quiz</Link></li>
          <li><Link to="/counselling" className="hover:underline">Counselling</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/jobs" className=" bg-emerald-400  hover:bg-emerald-500 p-2 rounded-2xl">Find Jobs</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 text-center font-bold text-white">
          <li><Link to="/" onClick={() => setIsOpen(false)} className="hover:underline">Home</Link></li>
          <li><Link to="/quiz" onClick={() => setIsOpen(false)} className="hover:underline">Quiz</Link></li>
          <li><Link to="/counselling" onClick={() => setIsOpen(false)} className="hover:underline">Counselling</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)} className="hover:underline">About</Link></li>
           <li><Link to="/jobs" className=" hover:bg-emerald-400 bg-emerald-300 text-emerald-950 rounded-xl py-2 px-20">Find Jobs</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;