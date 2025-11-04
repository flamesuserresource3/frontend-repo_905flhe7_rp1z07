import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Tracks from './components/Tracks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b12] text-white antialiased">
      <Navbar />

      {/* Subtle background accents */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full blur-3xl opacity-30" style={{
          background: 'radial-gradient(closest-side, rgba(99,102,241,0.35), transparent)'
        }} />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-30" style={{
          background: 'radial-gradient(closest-side, rgba(34,211,238,0.28), transparent)'
        }} />
      </div>

      <main>
        <Hero />
        <Features />
        <Tracks />
      </main>

      <Footer />
    </div>
  );
}

export default App;
