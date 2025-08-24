"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";



export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  const navLinks = [
    // { href: "/", label: "Home" },
    // { href: "/books", label: "Books" },
    { href: "/books", label: "Book" },
    { href: "/blogs", label: "Blog" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1b1b1b] text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            {/* <Image
              src={logo}
              alt="Book App Logo"
              width={40}
              height={40}
            /> */}
            <span className="ml-2 text-white font-Bold text-2xl">
             Book App
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href ? "text-primary" : "text-white"
              } hover:text-primary`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Search Bar and Login Button Container - Hidden on mobile */}

        {/* <div className="hidden lg:flex items-center space-x-4">
          <Link href="/login" className="text-white hover:text-primary">
            Login
          </Link>
          <Link href="/register" className="text-white hover:text-primary">
            Register
          </Link>
        </div> */}

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-full bg-background z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              {/* <Image
                src={logo}
                alt="Book App Logo"
                width={40}
                height={40}
              /> */}
              <span className="ml-2 text-white font-medium">
                Book App
              </span>
            </div>
            <button
              onClick={toggleSidebar}
              className="text-white focus:outline-none"
            >
              <FaTimes size={24} />
            </button>
          </div>

          {/* <div className="mb-6">
            <form className="flex justify-between items-center bg-white rounded-lg p-2">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-1 rounded-l-md text-black focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary text-white px-5 py-2 rounded-md hover:bg-primary"
              >
                <FaSearch />
              </button>
            </form>
          </div> */}

          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href ? "text-primary" : "text-white"
                } hover:text-primary py-2 border-b border-gray-700`}
                onClick={() => setIsSidebarOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay for sidebar */}
      {isSidebarOpen && <div className="fixed" onClick={toggleSidebar}></div>}
    </nav>
  );
}
