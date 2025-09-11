import Link from "next/link";
import type { Metadata } from "next";
import TeamCarousel from "@/components/TeamCarousel";

export const metadata: Metadata = {
  title: "Our Team | PadhaiDunia",
  description: "Meet the team behind PadhaiDunia",
};

export default function TeamsPage() {
  const members = [
    {
      name: "Aninda Sankar Sukla",
      role: "Co Founder",
      img: "/Team%20Pictures/aninda_sir.png",
      description: "Co Founder",
      linkedinUrl: "#",
    },
    {
      name: "Deevay Puri",
      role: "Co Founder",
      img: "/Team%20Pictures/deevay_sir.png",
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
  ];

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background gradient matching the reference */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0b1521] via-[#0f2234] to-[#0a1a2b]" />
      {/* Subtle vignette and glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-[-10%] h-96 w-96 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[28rem] w-[28rem] rounded-full bg-purple-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,rgba(255,255,255,0.06),rgba(0,0,0,0))]" />
      </div>

      <section className="max-w-5xl mx-auto text-center mb-8 px-4 pt-8">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
          Meet Our Team
        </h1>
        <p className="mt-2 text-teal-100/80">
          The minds shaping the future of education at PadhaiDunia
        </p>
        <div className="mt-3">
          <Link href="/" className="text-teal-300 hover:text-cyan-300 border-b border-teal-500/40">
            ← Back to Home
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <TeamCarousel members={members} />
      </section>
    </main>
  );
}
