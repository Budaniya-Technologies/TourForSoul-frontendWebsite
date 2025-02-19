import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoImg from "public/thebagPacker-logo.png";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "All Package", path: "/allpackages" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/ourteam" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            width={40}
            height={40}
            src={LogoImg}
            alt="Logo"
            className="rounded-full border-2 border-gray-300"
          />
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            TourForSoul
          </span>
        </div>

        {/* Menu Items */}
        <ul className="hidden lg:flex space-x-6 text-gray-900 dark:text-white">
          {menuItems.map(({ name, path }, index) => (
            <li key={index} className="relative group">
              <Link
                href={path}
                className="block px-4 py-2 text-lg font-medium transition-all duration-300 hover:text-blue-500"
              >
                {name}
              </Link>
              <span className="absolute left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </li>
          ))}
        </ul>

        {/* Search Field with Hover Effect */}
        <div className="flex items-center space-x-4">
          <div className="relative group flex items-center">
            <FaSearch
              size={20}
              className="text-gray-900 dark:text-white cursor-pointer group-hover:text-blue-500 transition-all duration-300"
            />
            <input
              type="text"
              placeholder="Search adventures..."
              className="absolute right-0 bg-white dark:bg-white-800 border border-gray-300 dark:border-gray-700 p-2 rounded-full shadow-md w-0 max-w-0 opacity-0 transition-all duration-300 group-hover:w-48 group-hover:max-w-xs group-hover:opacity-100 group-hover:pr-8"
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-gray-900 dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-gray-900 dark:text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          <FaTimes size={24} />
        </button>
        <ul className="flex flex-col items-center justify-center h-full space-y-6 text-gray-900 dark:text-white">
          {menuItems.map(({ name, path }, index) => (
            <li
              key={index}
              className="w-full text-center border-b border-gray-300 dark:border-gray-700 py-2"
            >
              <Link
                href={path}
                className="block text-lg font-semibold transition-all duration-300 hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
