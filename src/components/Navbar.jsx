"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu

  // Function to close the menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-green-700 text-white p-4 shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/image/logo.png" alt="Faculty Journal Logo" className="h-10 w-10 object-contain" />
          <span className="text-xl font-bold">Faculty Of Science</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/faculty" className="hover:underline">Faculty Journal</Link>
          <Link href="/editorial" className="hover:underline">Editorial Board</Link>
          <Link href="/departments" className="hover:underline">Departments</Link>
          <Link href="/archives" className="hover:underline">Archives</Link>
          {/* <Link href="/submit" className="hover:underline">Submit Manuscript</Link> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-gray-200 opacity-95 text-green-700 font-bold transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        } md:hidden`}
      >
        <ul className="flex flex-col space-y-4 p-4">
          <li>
            <Link href="/" className="block py-2 text-center hover:bg-green-800 rounded-md" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/faculty" className="block py-2 text-center hover:bg-green-800 rounded-md" onClick={closeMenu}>
              Faculty Journal
            </Link>
          </li>
          <li>
            <Link href="/editorial" className="block py-2 text-center hover:bg-green-800 rounded-md" onClick={closeMenu}>
              Editorial Board
            </Link>
          </li>
          <li>
            <Link href="/departments" className="block py-2 text-center hover:bg-green-800 rounded-md" onClick={closeMenu}>
              Departments
            </Link>
          </li>
          <li>
            <Link href="/archives" className="block py-2 text-center hover:bg-green-800 rounded-md" onClick={closeMenu}>
              Archives
            </Link>
          </li>
          {/* <li>
            <Link href="/submit" className="block py-2 text-center hover:bg-green-800 rounded-md" onClick={closeMenu}>
              Submit Manuscript
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
