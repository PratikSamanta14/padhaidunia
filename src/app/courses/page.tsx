"use client";

import Link from "next/link";
import { useState } from "react";

export default function CoursesPage() {
  const [isOpen, setIsOpen] = useState(false);

  const courses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      description: "Learn HTML, CSS, and JavaScript basics to build responsive websites from scratch.",
      duration: "8 weeks",
      level: "Beginner",
      price: "₹2,999"
    },
    {
      id: 2,
      title: "React.js Mastery",
      description: "Master React.js with hooks, state management, and modern development practices.",
      duration: "10 weeks",
      level: "Intermediate",
      price: "₹4,999"
    },
    {
      id: 3,
      title: "Full Stack Development",
      description: "Complete web development course covering frontend, backend, and database technologies.",
      duration: "16 weeks",
      level: "Advanced",
      price: "₹8,999"
    },
    {
      id: 4,
      title: "Python Programming",
      description: "Learn Python from basics to advanced concepts including data structures and algorithms.",
      duration: "12 weeks",
      level: "Beginner",
      price: "₹3,499"
    },
    {
      id: 5,
      title: "Data Science & Analytics",
      description: "Master data analysis, visualization, and machine learning with Python and R.",
      duration: "14 weeks",
      level: "Intermediate",
      price: "₹6,999"
    },
    {
      id: 6,
      title: "Mobile App Development",
      description: "Build cross-platform mobile apps using React Native and Flutter frameworks.",
      duration: "12 weeks",
      level: "Intermediate",
      price: "₹5,499"
    },
    {
      id: 7,
      title: "UI/UX Design",
      description: "Learn design principles, prototyping, and user experience optimization techniques.",
      duration: "10 weeks",
      level: "Beginner",
      price: "₹3,999"
    },
    {
      id: 8,
      title: "Cloud Computing & DevOps",
      description: "Master AWS, Docker, Kubernetes, and CI/CD pipelines for modern deployment.",
      duration: "14 weeks",
      level: "Advanced",
      price: "₹7,999"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900">
      {/* Navbar */}
      <header className="sticky top-0 bg-gray-800/80 backdrop-blur-lg shadow-md z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Brand Name with animation */}
          <Link href="/">
            <h1 className="text-2xl font-extrabold text-cyan-400 tracking-tight hover:scale-105 hover:text-cyan-300 transition-transform duration-300 cursor-pointer">
              PadhaiDunia
            </h1>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex gap-8 text-gray-300 font-medium">
            {["Home", "About Us", "Courses", "Teams", "Contact Us"].map((item) => (
              <Link
                key={item}
                href={
                  item === "Home"
                    ? "/"
                    : item === "About Us"
                    ? "/AboutUs"
                    : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                }
                className="relative group"
              >
                <span className="transition-colors duration-300 group-hover:text-cyan-400">
                  {item}
                </span>
                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Get Started Button */}
          <Link href="/signup">
            <button className="hidden md:block bg-cyan-500 text-white px-4 py-2 rounded-xl shadow hover:bg-cyan-400 hover:scale-105 transition-transform duration-300">
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
                href={
                  item === "Home"
                    ? "/"
                    : item === "About Us"
                    ? "/AboutUs"
                    : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                }
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

      {/* Courses Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
              Our <span className="text-cyan-400 animate-pulse">Courses</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Discover our comprehensive range of courses designed to help you master the latest technologies and advance your career.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 overflow-hidden group animate-fade-in-up"
                style={{ animationDelay: `${course.id * 100}ms` }}
              >
                {/* Course Icon */}
                <div className="h-48 border-b border-gray-200 flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-600/20 group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all duration-500">
                  <div className="w-24 h-24 text-cyan-500 group-hover:text-cyan-600 group-hover:scale-110 transition-all duration-500">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                      <path d="M8 7h8"/>
                      <path d="M8 11h8"/>
                      <path d="M8 15h6"/>
                    </svg>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  {/* Level Badge */}
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm border ${
                      course.level === 'Beginner' 
                        ? 'bg-green-600 text-green-100 border-green-600' 
                        : course.level === 'Intermediate'
                        ? 'bg-yellow-600 text-yellow-100 border-yellow-600'
                        : 'bg-red-600 text-red-100 border-red-600'
                    }`}>
                      {course.level}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-500 transition-colors duration-300">
                    {course.title}
                  </h3>

                  {/* Course Description */}
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {course.description}
                  </p>

                  {/* Course Details */}
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.duration}
                    </span>
                    <span className="text-2xl font-bold text-cyan-500">
                      {course.price}
                    </span>
                  </div>

                  {/* Enroll Button */}
                  <button className="w-full bg-blue-900 text-white py-3 rounded-xl font-medium hover:bg-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-900/25">
                    <span className="inline-flex items-center justify-center">
                      Enroll Now
                      <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-700">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Learning Journey?
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Join thousands of students who have transformed their careers with our courses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <button className="bg-cyan-500 text-white px-8 py-4 rounded-xl font-medium hover:bg-cyan-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Get Started Today
                  </button>
                </Link>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-medium hover:bg-cyan-400/10 transform hover:scale-105 transition-all duration-300">
                  View All Courses
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
