"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function AboutUsPage(): React.ReactElement {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<main className="min-h-screen relative text-gray-800 overflow-x-hidden">
			{/* Navbar */}
			<header className="sticky top-0 bg-white/90 backdrop-blur-lg shadow-md z-50 transition-all duration-300">
				<div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
					{/* Brand Name with animation */}
					<Link href="/">
						<h1 className="text-2xl font-extrabold text-blue-600 tracking-tight hover:scale-105 hover:text-blue-700 transition-transform duration-300 cursor-pointer">
							PadhaiDunia
						</h1>
					</Link>

					{/* Desktop Nav Links */}
					<nav className="hidden md:flex gap-8 text-gray-700 font-medium">
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
								<span className={`transition-colors duration-300 group-hover:text-blue-600 ${item === "About Us" ? "text-blue-600" : ""}`}>
									{item}
								</span>
								{/* Animated underline */}
								<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
							</Link>
						))}
					</nav>

					{/* Get Started Button */}
					<Link href="/signup">
						<button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 hover:scale-105 transition-all duration-300">
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
								className={`font-medium hover:text-blue-600 transition-colors ${item === "About Us" ? "text-blue-600" : "text-gray-700"}`}
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
			{/* 3D Animated Background */}
			<div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-blue-50" />
			<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
				{/* 3D Floating Spheres - Enhanced 3D effect */}
				<div className="absolute top-10 right-10 w-48 h-48 rounded-full opacity-90 animate-float-1 shadow-2xl shadow-blue-500/40" style={{
					background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8) 0%, rgba(59,130,246,0.9) 30%, rgba(37,99,235,1) 70%, rgba(29,78,216,0.8) 100%)',
					filter: 'blur(0.5px)',
					boxShadow: 'inset -10px -10px 20px rgba(0,0,0,0.1), 0 20px 40px rgba(59,130,246,0.3)'
				}} />
				
				<div className="absolute top-32 right-32 w-40 h-40 rounded-full opacity-85 animate-float-2 shadow-2xl shadow-purple-500/40" style={{
					background: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.9) 0%, rgba(168,85,247,0.8) 25%, rgba(147,51,234,1) 60%, rgba(124,58,237,0.9) 100%)',
					filter: 'blur(0.3px)',
					boxShadow: 'inset -8px -8px 16px rgba(0,0,0,0.08), 0 16px 32px rgba(168,85,247,0.25)'
				}} />
				
				<div className="absolute top-60 right-60 w-36 h-36 rounded-full opacity-90 animate-float-3 shadow-2xl shadow-pink-500/40" style={{
					background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95) 0%, rgba(244,114,182,0.7) 20%, rgba(236,72,153,0.9) 50%, rgba(219,39,119,1) 80%, rgba(190,24,93,0.8) 100%)',
					filter: 'blur(0.4px)',
					boxShadow: 'inset -6px -6px 12px rgba(0,0,0,0.06), 0 12px 24px rgba(244,114,182,0.3)'
				}} />
				
				<div className="absolute top-80 right-80 w-44 h-44 rounded-full opacity-80 animate-float-4 shadow-2xl shadow-cyan-500/40" style={{
					background: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.9) 0%, rgba(34,211,238,0.8) 30%, rgba(6,182,212,1) 70%, rgba(8,145,178,0.9) 100%)',
					filter: 'blur(0.6px)',
					boxShadow: 'inset -12px -12px 24px rgba(0,0,0,0.1), 0 24px 48px rgba(34,211,238,0.25)'
				}} />
				
				<div className="absolute top-20 right-96 w-32 h-32 rounded-full opacity-85 animate-float-5 shadow-2xl shadow-indigo-500/40" style={{
					background: 'radial-gradient(circle at 40% 40%, rgba(255,255,255,0.8) 0%, rgba(99,102,241,0.9) 25%, rgba(79,70,229,1) 65%, rgba(67,56,202,0.8) 100%)',
					filter: 'blur(0.3px)',
					boxShadow: 'inset -6px -6px 12px rgba(0,0,0,0.08), 0 12px 24px rgba(99,102,241,0.3)'
				}} />
				
				<div className="absolute top-52 right-72 w-38 h-38 rounded-full opacity-80 animate-float-6 shadow-2xl shadow-violet-500/40" style={{
					background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9) 0%, rgba(139,92,246,0.8) 30%, rgba(124,58,237,1) 70%, rgba(109,40,217,0.9) 100%)',
					filter: 'blur(0.5px)',
					boxShadow: 'inset -8px -8px 16px rgba(0,0,0,0.1), 0 16px 32px rgba(139,92,246,0.25)'
				}} />
				
				{/* Left side spheres */}
				<div className="absolute top-20 left-10 w-42 h-42 rounded-full opacity-75 animate-float-7 shadow-2xl shadow-teal-500/40" style={{
					background: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.85) 0%, rgba(20,184,166,0.8) 30%, rgba(13,148,136,1) 70%, rgba(15,118,110,0.9) 100%)',
					filter: 'blur(0.4px)',
					boxShadow: 'inset -10px -10px 20px rgba(0,0,0,0.08), 0 20px 40px rgba(20,184,166,0.25)'
				}} />
				
				<div className="absolute top-60 left-32 w-34 h-34 rounded-full opacity-85 animate-float-8 shadow-2xl shadow-rose-500/40" style={{
					background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.9) 0%, rgba(251,113,133,0.8) 25%, rgba(244,63,94,1) 60%, rgba(225,29,72,0.9) 100%)',
					filter: 'blur(0.3px)',
					boxShadow: 'inset -7px -7px 14px rgba(0,0,0,0.06), 0 14px 28px rgba(251,113,133,0.3)'
				}} />
				
				<div className="absolute top-40 left-64 w-28 h-28 rounded-full opacity-90 animate-float-9 shadow-2xl shadow-sky-500/40" style={{
					background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95) 0%, rgba(56,189,248,0.8) 30%, rgba(14,165,233,1) 70%, rgba(2,132,199,0.9) 100%)',
					filter: 'blur(0.2px)',
					boxShadow: 'inset -5px -5px 10px rgba(0,0,0,0.05), 0 10px 20px rgba(56,189,248,0.3)'
				}} />
				
				{/* Center area spheres */}
				<div className="absolute top-40 left-1/2 w-36 h-36 rounded-full opacity-80 animate-float-10 shadow-2xl shadow-emerald-500/40" style={{
					background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9) 0%, rgba(52,211,153,0.8) 30%, rgba(16,185,129,1) 70%, rgba(5,150,105,0.9) 100%)',
					filter: 'blur(0.4px)',
					boxShadow: 'inset -8px -8px 16px rgba(0,0,0,0.08), 0 16px 32px rgba(52,211,153,0.25)'
				}} />
				
				<div className="absolute top-80 left-1/3 w-30 h-30 rounded-full opacity-85 animate-float-11 shadow-2xl shadow-orange-500/40" style={{
					background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.9) 0%, rgba(251,146,60,0.8) 25%, rgba(249,115,22,1) 60%, rgba(234,88,12,0.9) 100%)',
					filter: 'blur(0.3px)',
					boxShadow: 'inset -6px -6px 12px rgba(0,0,0,0.06), 0 12px 24px rgba(251,146,60,0.3)'
				}} />
				
				<div className="absolute top-96 right-1/3 w-32 h-32 rounded-full opacity-80 animate-float-12 shadow-2xl shadow-yellow-500/40" style={{
					background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9) 0%, rgba(250,204,21,0.8) 30%, rgba(234,179,8,1) 70%, rgba(202,138,4,0.9) 100%)',
					filter: 'blur(0.4px)',
					boxShadow: 'inset -6px -6px 12px rgba(0,0,0,0.08), 0 12px 24px rgba(250,204,21,0.3)'
				}} />
				
				{/* Glass morphism overlays - enhanced */}
				<div className="absolute top-16 right-16 w-56 h-56 bg-white/15 backdrop-blur-xl rounded-3xl border border-white/30 animate-float-10" style={{
					boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4), 0 8px 32px rgba(0,0,0,0.1)'
				}} />
				<div className="absolute top-64 left-20 w-48 h-48 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/25 animate-float-11" style={{
					boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 6px 24px rgba(0,0,0,0.08)'
				}} />
				<div className="absolute top-88 right-1/4 w-40 h-40 bg-white/12 backdrop-blur-xl rounded-2xl border border-white/20 animate-float-12" style={{
					boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35), 0 4px 16px rgba(0,0,0,0.06)'
				}} />
				<div className="absolute top-32 left-1/2 w-44 h-44 bg-white/8 backdrop-blur-xl rounded-3xl border border-white/18 animate-float-1" style={{
					boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25), 0 6px 24px rgba(0,0,0,0.05)'
				}} />
			</div>

			{/* Centered three-card layout */}
			<section className="px-4 sm:px-6 lg:px-10 py-16 lg:py-20 max-w-6xl mx-auto">
				{/* About Us */}
				<div className="relative mb-8 text-center">
					<div className="absolute -inset-6 bg-blue-500/10 blur-2xl rounded-3xl" />
					<div className="relative rounded-3xl border border-white/20 bg-white/80 backdrop-blur-xl p-6 sm:p-10 shadow-xl shadow-blue-500/20 transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
						<p className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-blue-600 bg-blue-100 border border-blue-200 rounded-full px-3 py-1 mb-3">
							<span>🚀</span> About PadhaiDunia
						</p>
						<h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
							<span>Empowering the </span>
							<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Future of Learners</span>
						</h1>
						<p className="mt-4 mx-auto max-w-3xl text-gray-700">
							PadhaiDunia is a modern learning platform where students explore curated courses, practise exams, and discover top colleges—all in one place. We blend technology, mentorship, and community to make high‑quality education accessible, engaging, and outcome‑driven.
						</p>
						<p className="mt-3 mx-auto max-w-3xl text-gray-600">
							We help every learner build real skills, gain confidence, and accelerate their careers through personalized learning paths and measurable progress.
						</p>
					</div>
				</div>

				{/* Mission */}
				<div className="relative mb-8 text-center">
					<div className="absolute -inset-6 bg-purple-500/10 blur-2xl rounded-3xl" />
					<div className="relative rounded-3xl border border-white/20 bg-white/80 backdrop-blur-xl p-6 sm:p-10 shadow-xl shadow-purple-500/20 transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
						<h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Our Mission</h2>
						<p className="mt-3 mx-auto max-w-3xl text-gray-700">
							To deliver accessible, outcome‑oriented education through interactive learning, real‑time feedback, and actionable insights—so every student can learn faster, smarter, and with confidence.
						</p>
						<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
							{[
								{ title: "Personalized Paths", desc: "Adaptive recommendations keep learning relevant." },
								{ title: "Practice That Counts", desc: "Exam‑style questions with analytics." },
								{ title: "Guided Decisions", desc: "Transparent college data for choices." },
							].map((card) => (
								<div key={card.title} className="rounded-2xl border border-white/30 bg-white/60 p-4 transition-transform duration-300 hover:scale-[1.05] hover:shadow-xl">
									<h3 className="font-semibold text-gray-800">{card.title}</h3>
									<p className="text-sm text-gray-600 mt-1">{card.desc}</p>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Features */}
				<div className="relative text-center">
					<div className="absolute -inset-6 bg-pink-500/10 blur-2xl rounded-3xl" />
					<div className="relative rounded-3xl border border-white/20 bg-white/80 backdrop-blur-xl p-6 sm:p-10 shadow-xl shadow-pink-500/20 transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
						<h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Key Features</h2>
						<div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
							{[
								{ title: "Interactive Courses", desc: "Video + hands‑on tasks", icon: "📘" },
								{ title: "Mock Exams", desc: "Timed/topic‑wise", icon: "🧠" },
								{ title: "College Finder", desc: "Compare programs", icon: "🏫" },
								{ title: "Mentor Support", desc: "Guidance that sticks", icon: "🤝" },
							].map((f) => (
								<div key={f.title} className="rounded-2xl bg-white/60 border border-white/30 p-4 transition-transform duration-300 hover:scale-[1.06] hover:shadow-xl">
									<div className="text-2xl">{f.icon}</div>
									<h3 className="mt-2 font-semibold text-gray-800">{f.title}</h3>
									<p className="text-xs text-gray-600">{f.desc}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
