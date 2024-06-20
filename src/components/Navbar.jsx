import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/logo.png';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 text-black fixed w-full flex justify-between items-center z-10">
      <div className='flex items-center gap-2'>
        <img src={logo} alt="logo" width={40} height={40} />
        <h1 className="text-2xl font-bold">Spyno</h1>
      </div>
      <div className="hidden md:flex items-center gap-5">
        <NavLink to="/" className="px-4 font-bold py-2 bg-blue-400 text-white rounded-md">
          Home
        </NavLink>
       
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>


        <div className="bg-white w-full h-full p-6">
          <div className="flex items-center justify-between mb-6 border-b-2 border-black py-2 ">
            <img src={logo} alt="logo" width={40} height={40} />
            <h1 className="text-2xl font-bold">Spyno</h1>
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              <FiX size={24} />
            </button>
          </div>
          <nav className="flex flex-col gap-5">
            <NavLink to="/" onClick={toggleMenu} className="px-4 text-2xl font-bold py-2  text-black">
              Home
            </NavLink>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
