import { Link } from "wouter";
import { Wrench, Lock, Zap, DollarSign, AlertCircle, TrendingUp } from "lucide-react";

/**
 * Service Page - Lil Zeus Towing
 * Design: Comprehensive service offerings with detailed descriptions
 */

const services = [
  {
    icon: Wrench,
    title: "24/7 Towing Service",
    desc: "Professional towing services available around the clock. Whether you need light-duty or heavy-duty towing, we have the equipment and expertise to handle it all.",
    features: ["Light-duty towing", "Heavy-duty towing", "Long-distance towing", "Emergency towing"],
  },
  {
    icon: Lock,
    title: "Lockout Service",
    desc: "Locked your keys inside your car? Our skilled technicians can quickly and safely unlock your vehicle without causing any damage.",
    features: ["Car lockout", "Trunk opening", "No damage guarantee", "Fast response"],
  },
  {
    icon: Zap,
    title: "Tire Service",
    desc: "Flat tire? Our tire service includes tire changes, repairs, and assistance to get you back on the road safely and quickly.",
    features: ["Tire change", "Flat tire repair", "Spare tire installation", "Mobile service"],
  },
  {
    icon: DollarSign,
    title: "Junk Car Removal",
    desc: "We buy junk cars for cash! Get rid of that old vehicle taking up space and put cash in your pocket with our quick and easy process.",
    features: ["Cash on the spot", "Free towing", "Quick process", "Any condition accepted"],
  },
  {
    icon: AlertCircle,
    title: "Roadside Assistance",
    desc: "Comprehensive roadside assistance for all your emergency needs. From jump starts to fuel delivery, we've got you covered.",
    features: ["Jump start", "Fuel delivery", "Battery service", "Minor repairs"],
  },
  {
    icon: TrendingUp,
    title: "Accident Recovery",
    desc: "Professional accident recovery services with careful handling of damaged vehicles. We work with insurance companies for hassle-free service.",
    features: ["Safe recovery", "Insurance coordination", "Secure transport", "24/7 availability"],
  },
];

export default function Service() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 text-2xl font-bold text-white hover:text-red-500 transition-colors">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                Z
              </div>
              <span>LIL ZEUS</span>
            </a>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/">
              <a className="text-gray-300 hover:text-white transition-colors font-medium">HOME</a>
            </Link>
            <Link href="/about">
              <a className="text-gray-300 hover:text-white transition-colors font-medium">ABOUT US</a>
            </Link>
            <Link href="/service">
              <a className="text-white font-medium border-b-2 border-red-600">SERVICE</a>
            </Link>
            <Link href="/process">
              <a className="text-gray-300 hover:text-white transition-colors font-medium">PROCESS</a>
            </Link>
            <Link href="/contact">
              <a className="text-gray-300 hover:text-white transition-colors font-medium">CONTACT US</a>
            </Link>
          </div>
          <a href="tel:803-606-0370" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-bold transition-colors">
            📞 803-606-0370
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-2xl text-gray-300">Comprehensive Towing & Roadside Assistance Solutions</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-slate-700/50 p-8 rounded-lg border border-slate-600 hover:border-red-600 transition-colors">
                  <Icon className="w-12 h-12 text-red-600 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="text-gray-300 flex items-center gap-2">
                        <span className="text-red-600">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Why Choose Section */}
          <div className="mt-16">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Why Choose Our Services?</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: "⚡", title: "Fast Response", desc: "Average arrival time under 30 minutes" },
                { icon: "✓", title: "Licensed & Insured", desc: "Fully certified professional service" },
                { icon: "💰", title: "Affordable Rates", desc: "Competitive pricing for all services" },
                { icon: "24", title: "24/7 Availability", desc: "Always here when you need us" },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 text-center hover:border-red-600 transition-colors">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Don't wait! Call us now for fast, reliable towing and roadside assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:803-606-0370" className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
              📞 CALL NOW: 803-606-0370
            </a>
            <Link href="/contact">
              <a className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
                GET A QUOTE
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/"><a className="text-gray-400 hover:text-white transition-colors">Home</a></Link></li>
                <li><Link href="/about"><a className="text-gray-400 hover:text-white transition-colors">About Us</a></Link></li>
                <li><Link href="/service"><a className="text-gray-400 hover:text-white transition-colors">Service</a></Link></li>
                <li><Link href="/process"><a className="text-gray-400 hover:text-white transition-colors">Process</a></Link></li>
                <li><Link href="/contact"><a className="text-gray-400 hover:text-white transition-colors">Contact Us</a></Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Our Services</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>24/7 Towing Service</li>
                <li>Lockout Service</li>
                <li>Tire Service</li>
                <li>Junk Car Removal</li>
                <li>Emergency Roadside</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="tel:803-606-0370" className="hover:text-white transition-colors">📞 803-606-0370</a></li>
                <li><a href="mailto:Lilzeustowing@gmail.com" className="hover:text-white transition-colors">✉️ Lilzeustowing@gmail.com</a></li>
                <li>📍 1006 Congaree Pointe Drive<br/>Columbia SC 29209</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors text-2xl">f</a>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors text-2xl">𝕏</a>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors text-2xl">📷</a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-gray-400">
            <p>© 2026 Lil Zeus Towing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
