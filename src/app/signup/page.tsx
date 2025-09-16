import Link from "next/link";
import AuthForm from "@/components/AuthForm";
import AuthBackdrop from "@/components/AuthBackdrop";
import TiltCard from "@/components/TiltCard";

export default function SignupPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Join PadhaiDunia</h1>
            <p className="text-purple-200/90 text-lg leading-relaxed mb-6">
              Be part of a mission to make quality tech education accessible. Build
              real projects, showcase your work, and accelerate your career with a
              supportive community.
            </p>
            <ul className="space-y-2 text-purple-200/80">
              <li className="flex items-center gap-2"><span className="text-cyan-300">◆</span> Live cohorts and workshops</li>
              <li className="flex items-center gap-2"><span className="text-cyan-300">◆</span> Interview prep and reviews</li>
              <li className="flex items-center gap-2"><span className="text-cyan-300">◆</span> Alumni and hiring network</li>
            </ul>
          </div>
          <TiltCard className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-slate-900/70 via-slate-800/70 to-slate-900/70 backdrop-blur-md p-6 shadow-[0_0_30px_rgba(147,51,234,0.25)]">
            <h2 className="text-2xl font-bold text-white mb-2">Create your account</h2>
            <p className="text-purple-200/80 mb-4">Start your learning journey today.</p>
            <AuthForm mode="signup" />
            <p className="mt-4 text-sm text-purple-200/80 text-center">
              Already have an account? <Link className="text-cyan-300 hover:text-cyan-200" href="/login">Log in</Link>
            </p>
          </TiltCard>
        </div>
      </section>
      <AuthBackdrop />
    </main>
  );
}


