import { MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">C.E. Power Tax</h3>
            <p className="text-gray-400 mb-6">
              Orlando's trusted tax preparation experts. Maximizing your refund since day one.
            </p>
            <div className="space-y-3">
              <a
                href="https://maps.google.com/?q=310+North+Orange+Avenue+Orlando+FL"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin size={18} />
                <span className="text-sm">310 North Orange Avenue, Orlando, FL</span>
              </a>
              <a
                href="tel:407-801-1593"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span className="text-sm">(407) 801-1593</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Personal Tax Returns
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Free Tax Filing
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Refund Optimization
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Deduction Analysis
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="tel:407-801-1593" className="hover:text-white transition-colors">
                  Call Now
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get Started</h4>
            <p className="text-gray-400 mb-4">
              Ready to maximize your tax refund? Contact us today for a free consultation.
            </p>
            <a
              href="tel:407-801-1593"
              className="block w-full px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full text-center font-medium transition-colors"
            >
              Call (407) 801-1593
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2025 C.E. Power Tax. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
