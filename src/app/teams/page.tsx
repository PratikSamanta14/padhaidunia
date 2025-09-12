import Link from "next/link";
import type { Metadata } from "next";
import TeamCarousel from "@/components/TeamCarousel";
import ExploreTeamSection from "@/components/ExploreTeamSection";
import { TeamMember } from "@/components/TeamCard";

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
      {/* Meet Our Team Section - At the top */}
      <section className="max-w-5xl mx-auto text-center mb-8 px-4 pt-8 relative z-10">
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

      {/* Carousel Section - At the top */}
      <section className="max-w-6xl mx-auto px-4 pb-12 relative z-10">
        <TeamCarousel members={members} />
      </section>

      {/* Explore Team Section */}
      <ExploreTeamSection sections={teamSections} />

      {/* Background gradient matching the reference */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0b1521] via-[#0f2234] to-[#0a1a2b]" />
      {/* Subtle vignette and glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-[-10%] h-96 w-96 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[28rem] w-[28rem] rounded-full bg-purple-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,rgba(255,255,255,0.06),rgba(0,0,0,0))]" />
      </div>
    </main>
  );
}
