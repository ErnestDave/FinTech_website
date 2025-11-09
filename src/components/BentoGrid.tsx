import { Calculator, Receipt, TrendingUp, Users } from 'lucide-react';

const gridItems = [
  {
    icon: Calculator,
    title: 'Personal Tax Returns',
    description: 'Complete individual tax preparation with all forms and schedules',
    span: 'lg:col-span-2',
    gradient: 'from-green-600/20 to-emerald-600/20',
  },
  {
    icon: Receipt,
    title: 'Deduction Analysis',
    description: 'Comprehensive review to maximize your eligible deductions',
    span: 'lg:col-span-1',
    gradient: 'from-blue-600/20 to-cyan-600/20',
  },
  {
    icon: TrendingUp,
    title: 'Refund Optimization',
    description: 'Strategic planning to ensure you get the biggest refund possible',
    span: 'lg:col-span-1',
    gradient: 'from-teal-600/20 to-green-600/20',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Professional guidance throughout the entire tax filing process',
    span: 'lg:col-span-2',
    gradient: 'from-emerald-600/20 to-lime-600/20',
  },
];

export default function BentoGrid() {
  return (
    <section id="work" className="py-32 bg-gradient-to-b from-black via-gray-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive tax preparation services tailored to your unique financial situation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {gridItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`group ${item.span} p-8 lg:p-12 bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-3xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
