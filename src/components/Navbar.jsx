import { Rocket, BookOpen, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-[rgba(10,10,14,0.5)] border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 grid place-items-center shadow-lg shadow-fuchsia-500/20">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold text-white text-lg tracking-tight">NextLearn</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#tracks" className="hover:text-white transition">Tracks</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#about" className="hover:text-white transition">About</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/15 text-white/90 hover:text-white hover:border-white/30 transition">
            <BookOpen className="h-4 w-4" /> Explore
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 text-white font-medium shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition">
            <Rocket className="h-4 w-4" /> Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
