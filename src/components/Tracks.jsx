import { Code2, Atom, Brain, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const tracks = [
  {
    icon: <Code2 className="h-5 w-5" />, title: 'Full‑Stack', level: 'Beginner → Pro',
    desc: 'Modern web from fundamentals to production: HTML/CSS, React, APIs, and cloud.'
  },
  {
    icon: <Brain className="h-5 w-5" />, title: 'AI & ML', level: 'Math‑lite → Applied',
    desc: 'Hands-on AI with Python, transformers, and real datasets to build smart apps.'
  },
  {
    icon: <Atom className="h-5 w-5" />, title: 'Physics XR', level: 'Visual → Intuitive',
    desc: 'Simulate concepts in 3D so forces, waves, and fields feel natural to explore.'
  },
  {
    icon: <Globe className="h-5 w-5" />, title: 'Data & Viz', level: 'Story‑driven',
    desc: 'Turn raw data into beautiful narratives with dashboards, charts, and maps.'
  },
];

export default function Tracks() {
  return (
    <section id="tracks" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Choose your path</h2>
            <p className="mt-2 text-white/70 max-w-xl">Structured curricula with checkpoints, interactive labs, and real projects.</p>
          </div>
          <a href="#" className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 hover:text-white hover:border-white/30 transition">
            View all tracks
          </a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tracks.map((t, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.07] transition"
            >
              <div className="pointer-events-none absolute -inset-24 opacity-0 hover:opacity-40 blur-3xl transition" style={{
                background: 'radial-gradient(60% 60% at 50% 40%, rgba(99,102,241,0.3) 0%, rgba(168,85,247,0.25) 35%, rgba(34,211,238,0.22) 65%, transparent 80%)'
              }} />
              <div className="relative z-10">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 text-white grid place-items-center shadow-md shadow-fuchsia-500/20">
                  {t.icon}
                </div>
                <h3 className="mt-4 text-white font-medium">{t.title}</h3>
                <p className="text-xs text-white/60">{t.level}</p>
                <p className="mt-2 text-white/70 text-sm leading-relaxed">{t.desc}</p>
                <div className="mt-4 inline-flex items-center text-sm text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-cyan-300">
                  Start track →
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
