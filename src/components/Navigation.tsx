import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  scrollY: number;
}

export default function Navigation({ scrollY }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = scrollY > 50;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold tracking-tight">C.E. Power Tax</h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm hover:text-green-400 transition-colors">
              Services
            </a>
            <a href="#work" className="text-sm hover:text-green-400 transition-colors">
              Why Choose Us
            </a>
            <a href="#about" className="text-sm hover:text-green-400 transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm hover:text-green-400 transition-colors">
              Contact
            </a>
            <a href="tel:407-801-1593" className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-full text-sm font-medium transition-all hover:scale-105">
              (407) 801-1593
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            <a
              href="#features"
              className="block text-sm hover:text-green-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#work"
              className="block text-sm hover:text-green-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Why Choose Us
            </a>
            <a
              href="#about"
              className="block text-sm hover:text-green-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-sm hover:text-green-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a href="tel:407-801-1593" className="w-full block text-center px-6 py-2 bg-green-600 hover:bg-green-700 rounded-full text-sm font-medium transition-colors">
              (407) 801-1593
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
