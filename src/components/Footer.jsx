export default function Footer() {
  return (
    <footer id="about" className="relative border-t border-white/10 bg-[#0b0b12]">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-semibold text-lg">NextLearn</h3>
            <p className="mt-1.5 text-white/60 max-w-md text-sm">A next‑level education experience with interactive 3D, cinematic animations, and a bold purple–blue aesthetic.</p>
          </div>
          <div className="text-white/70 text-sm">
            © {new Date().getFullYear()} NextLearn. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
