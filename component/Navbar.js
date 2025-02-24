import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import LogoImg from "public/thebagPacker-logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sidebarRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // ✅ Directly navigate without setTimeout
  const handleNav = (path) => {
    setIsMenuOpen(false);
    router.push(path);
  };

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
        isScrolled ? "bg-white shadow-lg dark:bg-gray-900" : "bg-transparent"
      }`}
    >
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/" passHref>
            <Image
              width={40}
              height={40}
              src={LogoImg}
              alt="Logo"
              className="rounded-full border-2 border-gray-300 cursor-pointer"
            />
          </Link>
          <Link href="/" passHref>
            <span className="text-2xl font-bold text-gray-900 dark:text-white cursor-pointer">
              TourForSoul
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 text-gray-900 dark:text-white">
          {menuItems.map(({ name, path }, index) => (
            <li key={index} className="relative group">
              <Link href={path}>
                <span className="block px-4 py-2 text-lg font-medium transition-all duration-300 hover:text-yellow-500 cursor-pointer">
                  {name}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-900 dark:text-white"
          onClick={() => setIsMenuOpen(true)}
        >
          <FaBars size={24} />
        </button>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
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
              <Link href={path}>
                <span className="block px-4 py-2 text-lg font-medium transition-all duration-300 hover:text-yellow-500 cursor-pointer">
                  {name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay (closes menu when clicking outside) */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0  bg-black bg-opacity-50"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}

export default Navbar;
