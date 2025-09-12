"use client";

import Link from "next/link";
import { useState } from "react";
import TeamCarousel from "@/components/TeamCarousel";
import ExploreTeamSection from "@/components/ExploreTeamSection";
import { TeamMember } from "@/components/TeamCard";

export default function TeamsPage() {
  const [isOpen, setIsOpen] = useState(false);

  const members = [
    {
      name: "Aninda Sankar Sukla",
      role: "Co Founder",
      img: "/Team%20Pictures/aninda_sir.png",
      description: "Co Founder",
      linkedinUrl: "#",
    },
    {
      name: "Founder 2",
      role: "Co Founder",
      img: "/Team%20Pictures/aa.png",
      description: "Co Founder",
      linkedinUrl: "#",
    },
    {
      name: "Snehashis Pati",
      role: "Team lead",
      img: "/Team%20Pictures/Snehashis.png",
      description: "Leads component architecture and smooth user experiences.",
      linkedinUrl: "#",
    },
   
    {
      name: "Tanushree Mandal",
      role: "Frontend",
      img: "/Team%20Pictures/Tanushree.jpeg",
      description: "Leads component architecture and smooth user experiences.",
      linkedinUrl: "https://www.linkedin.com/in/tanushree-mandal-aba24b286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Soumick Samanta",
      role: "Frontend",
      img: "/Team%20Pictures/Soumick.jpeg",
      description: "Leads component architecture and smooth user experiences.",
      linkedinUrl: "https://www.linkedin.com/in/soumick-samanta-a9103028b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Suthirtha Dey",
      role: "Frontend",
      img: "/Team%20Pictures/Suthirtha.jpeg",
      description: "Leads component architecture and smooth user experiences.",
      linkedinUrl: "https://www.linkedin.com/in/suthirtha-dey-942478273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Pratil Samanta",
      role: "Full Stack",
      img: "/Team%20Pictures/Pratik.jpeg",
      description: "Focuses on accessibility-first interfaces and design systems.",
      linkedinUrl: "https://www.linkedin.com/in/pratik-samanta-31b5ba28b",

    },
    {
      name: "Debosmita Ghosh",
      role: "Frontend",
      img: "/Team%20Pictures/Debosmita.jpeg",
      description: "Focuses on accessibility-first interfaces and design systems.",
      linkedinUrl: "",
    },
    {
      name: "Kartik Tulsian",
      role: "Frontend",
      img: "/Team%20Pictures/Kartik.jpeg",
      description: "Crafts engaging UI and elevates performance across the web app.",
      linkedinUrl: "https://www.linkedin.com/in/kartik-tulsian-682a6128a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Indira Chatterjee",
      role: "Frontend",
      img: "/Team%20Pictures/Indira.jpeg",
      description: "Focuses on accessibility-first interfaces and design systems.",
      linkedinUrl: "https://www.linkedin.com/in/indira-chatterjee-48253428b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Anubrata Guin",
      role: "Backend",
      img: "/Team%20Pictures/Anubrata.jpg",
      description: "Focuses on accessibility-first interfaces and design systems.",
      linkedinUrl: "https://www.linkedin.com/in/anubrata-guin/",
    },
    {
      name: "Agnijit Basu",
      role: "Backend",
      img: "/Team%20Pictures/Agnijit.jpeg",
      description: "Focuses on accessibility-first interfaces and design systems.",
      linkedinUrl: "https://www.linkedin.com/in/agnijit-basu-725201382?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];

  // Organize members into sections
  const founders = members.filter(member => member.role === "Co Founder");
  const frontend = members.filter(member => member.role === "Frontend");
  const backend = members.filter(member => member.role === "Backend");
  const teamLead = members.filter(member => member.role === "Team lead");
  const fullStack = members.filter(member => member.role === "Full Stack");

  const teamSections = [
    {
      title: "Founders",
      members: founders,
      icon: "👑"
    },
    {
      title: "Team Lead",
      members: teamLead,
      icon: "🎯"
    },
    {
      title: "Frontend Team",
      members: frontend,
      icon: "🎨"
    },
    {
      title: "Backend Team", 
      members: backend,
      icon: "⚙️"
    },
    {
      title: "Full Stack Team",
      members: fullStack,
      icon: "🚀"
    }
  ].filter(section => section.members.length > 0);

  return (
    <main className="min-h-screen relative overflow-hidden">
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

      {/* Meet Our Team Section - At the top */}
      <section className="max-w-5xl mx-auto text-center mb-8 px-4 pt-4 relative z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
          Meet Our Team
        </h1>
        <p className="mt-2 text-teal-100/80">
          The minds shaping the future of education at PadhaiDunia
        </p>
      </section>

      {/* Carousel Section - At the top */}
      <section className="max-w-6xl mx-auto px-4 pb-6 relative z-10">
        <TeamCarousel members={members} />
      </section>

      {/* Explore Team Section */}
      <ExploreTeamSection sections={teamSections} />

      {/* Call to Action Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            {/* 3D Glow Container */}
            <div className="relative bg-gradient-to-br from-slate-800/40 via-purple-900/30 to-slate-800/40 backdrop-blur-xl rounded-3xl border border-purple-500/30 p-12 shadow-[0_0_50px_rgba(147,51,234,0.2)] hover:shadow-[0_0_80px_rgba(147,51,234,0.4)] transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2">
              {/* Floating 3D Elements */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-to-br from-purple-400/40 to-cyan-400/40 rounded-full animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${3 + Math.random() * 2}s`,
                      transform: `translateZ(${Math.random() * 200 - 100}px)`,
                      boxShadow: `0 0 15px rgba(147, 51, 234, 0.5)`,
                    }}
                  />
                ))}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={`shape-${i}`}
                    className="absolute w-3 h-3 bg-gradient-to-br from-cyan-400/30 to-purple-400/30 rounded-sm animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 4}s`,
                      animationDuration: `${4 + Math.random() * 2}s`,
                      transform: `rotate(${Math.random() * 360}deg) translateZ(${Math.random() * 300 - 150}px)`,
                      boxShadow: `0 0 20px rgba(56, 189, 248, 0.4)`,
                    }}
                  />
                ))}
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 group-hover:text-purple-200 transition-colors duration-500">
                  Ready to Join the <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Future</span>?
                </h2>
                <p className="text-xl text-purple-200/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Connect with our team to explore opportunities and see if PadhaiDunia is the right fit for your career aspirations.
                </p>
                
                {/* 3D Glow Button */}
                <div className="relative inline-block group/btn">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-lg opacity-75 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                  <button className="relative bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold py-4 px-8 rounded-2xl shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:shadow-[0_0_50px_rgba(147,51,234,0.5)] transition-all duration-500 hover:scale-105 hover:-translate-y-1 flex items-center gap-3 mx-auto">
                    <span className="text-lg">CONNECT WITH OUR TEAM</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Corner Glow Effects */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-tl-3xl"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-tr-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-bl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-br-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Background gradient matching the reference */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0b1521] via-[#0f2234] to-[#0a1a2b]" />
      
      {/* Enhanced glowing effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Glowing orbs with previous colors */}
        <div className="absolute -top-40 right-[-10%] h-96 w-96 rounded-full bg-teal-400/25 blur-3xl animate-pulse" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[28rem] w-[28rem] rounded-full bg-purple-500/20 blur-3xl animate-pulse" />
        <div className="absolute top-1/3 left-1/4 h-48 w-48 rounded-full bg-cyan-400/15 blur-2xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 h-32 w-32 rounded-full bg-blue-400/20 blur-xl animate-pulse" />
        
        {/* Floating geometric shapes with glow */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-br from-teal-400/30 to-cyan-400/30 rounded-sm animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
              boxShadow: `0 0 20px rgba(56, 189, 248, 0.3)`,
            }}
          />
        ))}
        
        {/* Radial gradient overlay with glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500/8 via-transparent to-cyan-500/8" />
        
        {/* Subtle vignette and glow */}
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,rgba(255,255,255,0.08),rgba(0,0,0,0))]" />
      </div>
    </main>
  );
}
