"use client";

import Link from "next/link";
import { useState } from "react";

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Navbar */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-lg shadow-md z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Brand Name with animation */}
          <h1 className="text-2xl font-extrabold text-blue-600 tracking-tight hover:scale-105 hover:text-blue-700 transition-transform duration-300 cursor-pointer">
            PadhaiDunia
          </h1>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
            {["Home", "About Us", "Courses", "Teams", "Contact Us"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="relative group"
              >
                <span className="transition-colors duration-300 group-hover:text-blue-600">
                  {item}
                </span>
                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Get Started Button */}
          <Link href="/signup">
            <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 hover:scale-105 transition-transform duration-300">
              Get Started
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-white/90 backdrop-blur-md animate-slideDown">
            {["Home", "About Us", "Courses", "Teams", "Contact Us"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link href="/signup">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition">
                Get Started
              </button>
            </Link>
          </div>
        )}
      </header>
    </main>
  );
}
