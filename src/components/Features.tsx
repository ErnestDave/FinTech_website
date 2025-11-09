import { DollarSign, FileText, Shield, Clock } from 'lucide-react';

const features = [
  {
    icon: DollarSign,
    title: 'Maximum Refunds',
    description: 'Expert analysis to ensure you receive every deduction and credit you deserve.',
  },
  {
    icon: FileText,
    title: 'Free Tax Filing',
    description: 'Professional tax preparation services at no cost to qualified individuals.',
  },
  {
    icon: Shield,
    title: 'Secure & Accurate',
    description: 'Your financial information is protected with the highest security standards.',
  },
  {
    icon: Clock,
    title: 'Fast Processing',
    description: 'Quick turnaround times to get your refund as soon as possible.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              {' '}
              C.E. Power Tax
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Professional tax services designed to maximize your refund and minimize your stress.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600/30 transition-colors">
                  <Icon size={24} className="text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
