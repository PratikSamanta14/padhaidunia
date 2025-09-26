"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  price: string;
}

export default function CoursesPage() {
  const [isOpen, setIsOpen] = useState(false);

  const courses: Course[] = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      description:
        "Learn HTML, CSS, and JavaScript basics to build responsive websites from scratch.",
      duration: "8 weeks",
      level: "Beginner",
      price: "₹2,999",
    },
    {
      id: 2,
      title: "React.js Mastery",
      description:
        "Master React.js with hooks, state management, and modern development practices.",
      duration: "10 weeks",
      level: "Intermediate",
      price: "₹4,999",
    },
    {
      id: 3,
      title: "Full Stack Development",
      description:
        "Complete web development course covering frontend, backend, and database technologies.",
      duration: "16 weeks",
      level: "Advanced",
      price: "₹8,999",
    },
    {
      id: 4,
      title: "Python Programming",
      description:
        "Learn Python from basics to advanced concepts including data structures and algorithms.",
      duration: "12 weeks",
      level: "Beginner",
      price: "₹3,499",
    },
    {
      id: 5,
      title: "Data Science & Analytics",
      description:
        "Master data analysis, visualization, and machine learning with Python and R.",
      duration: "14 weeks",
      level: "Intermediate",
      price: "₹6,999",
    },
    {
      id: 6,
      title: "Mobile App Development",
      description:
        "Build cross-platform mobile apps using React Native and Flutter frameworks.",
      duration: "12 weeks",
      level: "Intermediate",
      price: "₹5,499",
    },
    {
      id: 7,
      title: "UI/UX Design",
      description:
        "Learn design principles, prototyping, and user experience optimization techniques.",
      duration: "10 weeks",
      level: "Beginner",
      price: "₹3,999",
    },
    {
      id: 8,
      title: "Cloud Computing & DevOps",
      description:
        "Master AWS, Docker, Kubernetes, and CI/CD pipelines for modern deployment.",
      duration: "14 weeks",
      level: "Advanced",
      price: "₹7,999",
    },
  ];

  // 🎨 Floating Shape Generator
  const shapes = useMemo(() => {
    const icons = ["▲", "■", "●", "◆", "∑", "∞", "⚛"];
    const colors = [
      "bg-cyan-400/30",
      "bg-purple-400/30",
      "bg-blue-500/25",
      "bg-pink-400/30",
      "bg-green-400/25",
    ];
    const animations = ["animate-float-slow", "animate-float-medium", "animate-float-fast"];

    return Array.from({ length: 18 }).map((_, i) => {
      const size = Math.floor(Math.random() * 80) + 30; // 30–110px
      const top = Math.random() * 90; // %
      const left = Math.random() * 90; // %
      const color = colors[Math.floor(Math.random() * colors.length)];
      const anim = animations[Math.floor(Math.random() * animations.length)];
      const isIcon = Math.random() > 0.5;
      const content = isIcon ? icons[Math.floor(Math.random() * icons.length)] : null;

      return { id: i, size, top, left, color, anim, isIcon, content };
    });
  }, []);

  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* --- Background Gradient --- */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f2c] to-[#141933]" />

      {/* --- Glow Spots --- */}
      <div className="absolute w-[500px] h-[500px] bg-[#4be1ec] rounded-full blur-[150px] opacity-30 animate-pulse-slower bottom-20 right-20"></div>
      <div className="absolute w-[400px] h-[400px] bg-[#1e3a8a] rounded-full blur-[160px] opacity-25 animate-pulse-slowest top-40 left-1/2"></div>


      {/* --- Navbar --- */}
      <header className="sticky top-0 bg-gray-800/80 backdrop-blur-lg shadow-md z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Brand */}
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
            <span
              className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
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

      {/* --- Floating Abstract Shapes Layer (Randomized) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {shapes.map((shape) =>
          shape.isIcon ? (
            <div
              key={shape.id}
              className={`absolute ${shape.anim} text-white/30 blur-sm`}
              style={{
                top: `${shape.top}%`,
                left: `${shape.left}%`,
                fontSize: `${shape.size}px`,
              }}
            >
              {shape.content}
            </div>
          ) : (
            <div
              key={shape.id}
              className={`absolute ${shape.color} ${shape.anim} rounded-lg`}
              style={{
                top: `${shape.top}%`,
                left: `${shape.left}%`,
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                opacity: 0.3,
              }}
            ></div>
          )
        )}
      </div>

      {/* --- Courses Section --- */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 py-20">
        <div className="text-center mb-16 max-w-2xl">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Explore Our Courses
          </h1>
          <p className="text-lg text-gray-300 mt-4">
            Learn cutting-edge skills with our modern, interactive courses.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 group"
            >
              <h2 className="text-2xl font-semibold text-cyan-300 group-hover:text-cyan-400 transition-colors">
                {course.title}
              </h2>
              <p className="text-gray-300 mt-3">{course.description}</p>

              <div className="flex justify-between text-sm text-gray-400 mt-4">
                <span>{course.duration}</span>
                <span>{course.level}</span>
              </div>

              <p className="text-lg font-bold text-cyan-400 mt-2">{course.price}</p>

              <Link href={`/courses/${course.id}`}>
                <button className="mt-6 w-full bg-cyan-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-cyan-400 transform hover:scale-105 transition-all duration-300 shadow-md">
                  Enroll Now
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* --- CTA Box --- */}
        <div className="w-full max-w-4xl bg-white/10 backdrop-blur-2xl border-2 border-cyan-400/40 rounded-3xl p-12 text-center shadow-[0_0_30px_rgba(0,255,255,0.25)] 
        transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_50px_rgba(0,255,255,0.5)] hover:border-cyan-300">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-8">
            Ready to start your journey?
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/signup">
              <button className="bg-cyan-500 text-white px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 transform hover:scale-110 transition-all duration-300 shadow-lg">
                Get Started
              </button>
            </Link>
            <Link href="/courses">
              <button className="border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400/10 transform hover:scale-110 transition-all duration-300">
                View More Courses
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}