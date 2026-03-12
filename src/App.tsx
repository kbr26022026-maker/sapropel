import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Applications from './components/Applications';
import Videos from './components/Videos';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-sans selection:bg-emerald-500/30">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Features />
        <About />
        <Applications />
        <Videos />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
