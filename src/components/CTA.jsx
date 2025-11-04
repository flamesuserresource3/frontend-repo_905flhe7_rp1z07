import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="cta" className="relative py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-600/40 via-fuchsia-600/40 to-cyan-600/40 p-8 md:p-12"
        >
          <div className="pointer-events-none absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(1200px 400px at -10% -20%, rgba(168,85,247,0.5), transparent), radial-gradient(1200px 400px at 110% 120%, rgba(34,211,238,0.5), transparent)' }} />
          <div className="relative z-10 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-white text-2xl md:text-3xl font-semibold">Ready to build your next-level skills?</h3>
              <p className="mt-2 text-white/80">Join a new kind of learning platform that feels more like play than study.</p>
            </div>
            <div className="flex md:justify-end">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-[#0b0b12] px-5 py-3 font-medium hover:bg-white/90 transition shadow-lg"
              >
                Create your account <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
