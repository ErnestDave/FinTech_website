import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import BentoGrid from './components/BentoGrid';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation scrollY={scrollY} />
      <Hero scrollY={scrollY} />
      <BentoGrid />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
