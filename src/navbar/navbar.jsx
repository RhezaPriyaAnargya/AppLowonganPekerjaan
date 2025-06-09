import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-yellow-500 fixed w-full top-0 left-0 z-10 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer">
          <Link to="home" smooth={true} duration={500}>
            CariKerja
          </Link>
        </div>

        {/* Burger Menu Icon for toggling sidebar */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl text-white focus:outline-none">
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Desktop Menu (still visible on large screens) */}
        <div className="hidden lg:flex space-x-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="px-4 py-2 hover:bg-gray-700 hover:text-white rounded transition-colors cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="vacancy"
            smooth={true}
            duration={500}
            className="px-4 py-2 hover:bg-gray-700 hover:text-white rounded transition-colors cursor-pointer"
          >
            Vacancy
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="px-4 py-2 hover:bg-gray-700 hover:text-white rounded transition-colors cursor-pointer"
          >
            About
          </Link>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-black text-yellow-500 w-64 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="text-xl font-bold">Menu</div>
          <button onClick={() => setIsOpen(false)} className="text-3xl text-white focus:outline-none">
            <HiX />
          </button>
        </div>
        <div className="flex flex-col mt-4 space-y-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="block px-4 py-2 hover:bg-gray-700 hover:text-white transition-colors cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="vacancy"
            smooth={true}
            duration={500}
            className="block px-4 py-2 hover:bg-gray-700 hover:text-white transition-colors cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Vacancy
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="block px-4 py-2 hover:bg-gray-700 hover:text-white transition-colors cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
