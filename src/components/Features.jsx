import { BookOpen, Shield, Zap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: 'Immersive 3D Lessons',
    desc: 'Interact with dynamic scenes that make complex topics intuitive and memorable.'
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: 'Cinematic Motion',
    desc: 'Framer-powered animations for a smooth, responsive feel on every interaction.'
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: 'Curated Learning Paths',
    desc: 'Move from fundamentals to mastery with structured tracks and micro-challenges.'
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: 'Progress That Sticks',
    desc: 'Smart spaced repetition and checkpoints keep knowledge fresh and retained.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Engineered to feel futuristic</h2>
          <p className="mt-3 text-white/70">Every pixel, color, and motion is tuned for clarity and delight.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.07] transition relative overflow-hidden"
            >
              <div className="absolute -inset-20 opacity-0 group-hover:opacity-40 blur-3xl transition pointer-events-none" style={{
                background: 'radial-gradient(50% 50% at 50% 50%, rgba(99,102,241,0.3) 0%, rgba(168,85,247,0.25) 35%, rgba(34,211,238,0.22) 65%, transparent 80%)'
              }} />
              <div className="relative z-10">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 text-white grid place-items-center shadow-md shadow-fuchsia-500/20">
                  {it.icon}
                </div>
                <h3 className="mt-4 text-white font-medium">{it.title}</h3>
                <p className="mt-1.5 text-white/70 text-sm leading-relaxed">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
