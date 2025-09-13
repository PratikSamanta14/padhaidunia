"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function AboutUsPage(): React.ReactElement {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<main className="min-h-screen relative text-white overflow-x-hidden">
			{/* Navbar */}
			<header className="sticky top-0 bg-black/80 backdrop-blur-lg shadow-md z-50 transition-all duration-300">
				<div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
					{/* Brand Name with animation */}
					<Link href="/">
						<h1 className="text-2xl font-extrabold text-teal-300 tracking-tight hover:scale-105 hover:text-cyan-400 transition-transform duration-300 cursor-pointer">
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
								<span className={`transition-colors duration-300 group-hover:text-teal-300 ${item === "About Us" ? "text-teal-300" : ""}`}>
									{item}
								</span>
								{/* Animated underline */}
								<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-300 transition-all duration-300 group-hover:w-full"></span>
							</Link>
						))}
					</nav>

					{/* Get Started Button */}
					<Link href="/signup">
						<button className="hidden md:block bg-gradient-to-r from-teal-400 to-cyan-400 text-black px-4 py-2 rounded-xl shadow hover:opacity-90 hover:scale-105 transition-all duration-300">
							Get Started
						</button>
					</Link>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden flex flex-col gap-1.5 focus:outline-none"
						onClick={() => setIsOpen(!isOpen)}
					>
						<span className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
						<span className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
						<span className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
					</button>
				</div>

				{/* Mobile Nav Dropdown */}
				{isOpen && (
					<div className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-black/90 backdrop-blur-md animate-slideDown">
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
								className={`font-medium hover:text-teal-300 transition-colors ${item === "About Us" ? "text-teal-300" : "text-gray-300"}`}
								onClick={() => setIsOpen(false)}
							>
								{item}
							</Link>
						))}
						<Link href="/signup">
							<button className="bg-gradient-to-r from-teal-400 to-cyan-400 text-black px-4 py-2 rounded-xl shadow hover:opacity-90 transition">
								Get Started
							</button>
						</Link>
					</div>
				)}
			</header>
			<div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#0b1521] via-[#0f2234] to-[#0a1a2b]" />
			<div className="pointer-events-none fixed inset-0 -z-10">
				<div className="absolute -top-40 right-[-10%] h-96 w-96 rounded-full bg-teal-400/20 blur-3xl" />
				<div className="absolute bottom-[-20%] left-[-10%] h-[28rem] w-[28rem] rounded-full bg-cyan-500/15 blur-3xl" />
				<div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,rgba(255,255,255,0.06),rgba(0,0,0,0))]" />
			</div>

			{/* Centered three-card layout */}
			<section className="px-4 sm:px-6 lg:px-10 py-16 lg:py-20 max-w-6xl mx-auto">
				{/* About Us */}
				<div className="relative mb-8 text-center">
					<div className="absolute -inset-6 bg-teal-500/10 blur-2xl rounded-3xl" />
					<div className="relative rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 sm:p-10 shadow-xl shadow-black/30 transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
						<p className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-teal-200 bg-teal-400/10 border border-teal-400/20 rounded-full px-3 py-1 mb-3">
							<span>🚀</span> About PadhaiDunia
						</p>
						<h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
							<span>Empowering the </span>
							<span className="bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">Future of Learners</span>
						</h1>
						<p className="mt-4 mx-auto max-w-3xl">
							PadhaiDunia is a modern learning platform where students explore curated courses, practise exams, and discover top colleges—all in one place. We blend technology, mentorship, and community to make high‑quality education accessible, engaging, and outcome‑driven.
						</p>
						<p className="mt-3 mx-auto max-w-3xl opacity-90">
							We help every learner build real skills, gain confidence, and accelerate their careers through personalized learning paths and measurable progress.
						</p>
					</div>
				</div>

				{/* Mission */}
				<div className="relative mb-8 text-center">
					<div className="absolute -inset-6 bg-cyan-500/10 blur-2xl rounded-3xl" />
					<div className="relative rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 sm:p-10 shadow-xl shadow-black/30 transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
						<h2 className="text-2xl sm:text-3xl font-bold">Our Mission</h2>
						<p className="mt-3 mx-auto max-w-3xl">
							To deliver accessible, outcome‑oriented education through interactive learning, real‑time feedback, and actionable insights—so every student can learn faster, smarter, and with confidence.
						</p>
						<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
							{[
								{ title: "Personalized Paths", desc: "Adaptive recommendations keep learning relevant." },
								{ title: "Practice That Counts", desc: "Exam‑style questions with analytics." },
								{ title: "Guided Decisions", desc: "Transparent college data for choices." },
							].map((card) => (
								<div key={card.title} className="rounded-2xl border border-white/10 bg-white/10 p-4 transition-transform duration-300 hover:scale-[1.05] hover:shadow-xl">
									<h3 className="font-semibold">{card.title}</h3>
									<p className="text-sm opacity-90 mt-1">{card.desc}</p>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Features */}
				<div className="relative text-center">
					<div className="absolute -inset-6 bg-teal-400/10 blur-2xl rounded-3xl" />
					<div className="relative rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 sm:p-10 shadow-xl shadow-black/30 transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
						<h2 className="text-2xl sm:text-3xl font-bold">Key Features</h2>
						<div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
							{[
								{ title: "Interactive Courses", desc: "Video + hands‑on tasks", icon: "📘" },
								{ title: "Mock Exams", desc: "Timed/topic‑wise", icon: "🧠" },
								{ title: "College Finder", desc: "Compare programs", icon: "🏫" },
								{ title: "Mentor Support", desc: "Guidance that sticks", icon: "🤝" },
							].map((f) => (
								<div key={f.title} className="rounded-2xl bg-white/10 border border-white/10 p-4 transition-transform duration-300 hover:scale-[1.06] hover:shadow-xl">
									<div className="text-2xl">{f.icon}</div>
									<h3 className="mt-2 font-semibold">{f.title}</h3>
									<p className="text-xs opacity-90">{f.desc}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
