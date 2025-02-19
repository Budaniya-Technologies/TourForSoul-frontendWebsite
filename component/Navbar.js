import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoImg from "public/thebagPacker-logo.png";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md dark:bg-gray-900">
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            width={40}
            height={40}
            src={LogoImg}
            className="rounded-full border-2 border-white"
            alt="TourForSoul Logo"
          />
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            TourForSoul
          </span>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white p-2 rounded-full shadow-md w-1/2 lg:w-1/3">
          <input
            type="text"
            placeholder="Search adventures..."
            className="p-2 outline-none w-full rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
            <FaSearch />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 text-gray-900 dark:text-white">
          <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link href="/allpackages" className="hover:text-blue-500">All Package</Link></li>
          <li><Link href="/blog" className="hover:text-blue-500">Blog</Link></li>
          <li><Link href="/about" className="hover:text-blue-500">About</Link></li>
          <li><Link href="/ourteam" className="hover:text-blue-500">Team</Link></li>
          <li><Link href="/contact" className="hover:text-blue-500">Contact Us</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-900 dark:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-16 text-center w-full bg-white dark:bg-gray-900 shadow-md p-4 transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col space-y-4 text-gray-900 dark:text-white">
          <li><Link href="/" className="block hover:text-blue-500">Home</Link></li>
          <li><Link href="/allpackages" className="block hover:text-blue-500">All Package</Link></li>
          <li><Link href="/blog" className="block hover:text-blue-500">Blog</Link></li>
          <li><Link href="/about" className="block hover:text-blue-500">About</Link></li>
          <li><Link href="/ourteam" className="block hover:text-blue-500">Team</Link></li>
          <li><Link href="/contact" className="block hover:text-blue-500">Contact Us</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
