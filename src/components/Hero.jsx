import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative isolate pt-28 md:pt-32 min-h-[90vh] overflow-hidden">
      {/* Background gradient + grain overlay (doesn't block interactions) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b12] via-[#0b0b12] to-[#0b0b12]" />
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '6px 6px' }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="py-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 animate-pulse" />
            Ultra-smooth learning experience
          </div>

          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-white">
            Learn at the speed of imagination
          </h1>
          <p className="mt-4 text-white/75 text-base md:text-lg max-w-xl">
            A futuristic education platform with interactive 3D visuals, cinematic motion, and a vibrant purple–blue palette designed to keep you fully engaged.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 px-5 py-3 text-white font-medium shadow-lg shadow-fuchsia-500/20 hover:opacity-95 transition"
            >
              Start Exploring
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-white/90 hover:text-white hover:border-white/30 transition"
            >
              Watch Demo
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="relative h-[420px] md:h-[560px] rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>

          {/* Soft purple/blue glow around edges (non-blocking) */}
          <div className="pointer-events-none absolute -inset-10 rounded-[2rem] opacity-50 blur-3xl" style={{
            background: 'radial-gradient(60% 60% at 50% 40%, rgba(99,102,241,0.35) 0%, rgba(168,85,247,0.25) 35%, rgba(34,211,238,0.22) 65%, transparent 80%)'
          }} />
        </motion.div>
      </div>
    </section>
  );
}
