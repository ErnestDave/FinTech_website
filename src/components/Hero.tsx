import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  scrollY: number;
}

export default function Hero({ scrollY }: HeroProps) {
  const parallaxOffset = scrollY * 0.5;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          background:
            'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8 animate-fade-in">
          <Sparkles size={16} className="text-green-400" />
          <span className="text-sm text-gray-300">Orlando's Trusted Tax Professionals</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight animate-fade-in-up">
          Maximize Your
          <br />
          <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Tax Refund
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-200">
          Professional tax preparation services in Orlando, FL. Get your maximum refund with expert guidance and free tax filing assistance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <button className="group px-8 py-4 bg-green-600 hover:bg-green-700 rounded-full font-medium transition-all hover:scale-105 flex items-center gap-2">
            File Your Taxes
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <a href="tel:407-801-1593" className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-full font-medium transition-all hover:scale-105">
            Call (407) 801-1593
          </a>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-600">
          <div>
            <div className="text-4xl font-bold text-green-400 mb-2">$4,290+</div>
            <div className="text-sm text-gray-400">Average Refund</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-400 mb-2">Free</div>
            <div className="text-sm text-gray-400">Tax Filing</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-teal-400 mb-2">Local</div>
            <div className="text-sm text-gray-400">Orlando Based</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
