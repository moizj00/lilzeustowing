import { Button } from "@/components/ui/button";
import { Phone, Clock, Zap } from "lucide-react";
import { Link } from "wouter";

/**
 * Home Page - Lil Zeus Towing
 * Design: Bold, professional towing service website with strong CTA focus
 * Color scheme: Dark background with red accents, white text
 * Typography: Strong headlines with supporting body text
 */

export default function Home() {
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
              <a className="text-gray-300 hover:text-white transition-colors font-medium">SERVICE</a>
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
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              24/7 TOWING SERVICE
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Serving Columbia, SC and Surrounding Areas
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <a className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105">
                  GET HELP NOW
                </a>
              </Link>
              <a href="tel:803-606-0370" className="border-2 border-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-600/10 transition-colors">
                CALL NOW
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-700/50 p-8 rounded-lg border border-slate-600 hover:border-red-600 transition-colors">
              <Clock className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">25+ YEARS EXPERIENCE</h3>
              <p className="text-gray-300">
                Decades of expertise in towing and roadside assistance
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-700/50 p-8 rounded-lg border border-slate-600 hover:border-red-600 transition-colors">
              <Zap className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">SHORT ARRIVAL TIME</h3>
              <p className="text-gray-300">
                Quick response within 30 minutes or less
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-700/50 p-8 rounded-lg border border-slate-600 hover:border-red-600 transition-colors">
              <Phone className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">AVAILABLE 24/7</h3>
              <p className="text-gray-300">
                Round-the-clock service for your emergencies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Welcome to Lil Zeus Towing
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Your trusted towing company with 15 years of dedicated service to the Columbia, SC area. We take pride in being your reliable partner, offering affordable and efficient 24/7 towing services.
              </p>
              <Link href="/about">
                <a className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105">
                  Learn More →
                </a>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-red-600/20 to-slate-700/20 rounded-lg p-8 border border-red-600/30">
              <div className="aspect-video bg-slate-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-center">
                  <p className="text-2xl font-bold mb-2">🚗</p>
                  <p>Professional Towing Services</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "24/7 Towing", desc: "Professional towing services available around the clock" },
              { title: "Lockout Service", desc: "Quick and safe vehicle lockout assistance" },
              { title: "Tire Service", desc: "Fast tire changes and repairs on the road" },
              { title: "Junk Car Removal", desc: "Cash on the spot for your old vehicles" },
              { title: "Roadside Assistance", desc: "Jump starts, fuel delivery, and more" },
              { title: "Accident Recovery", desc: "Safe recovery with insurance coordination" },
            ].map((service, idx) => (
              <div key={idx} className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-red-600 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/service">
              <a className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105">
                View All Services →
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Our Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Make a Call", desc: "Get instant replies when you call our operators at 803-606-0370" },
              { step: "02", title: "Half Hour Arrival", desc: "Get instant response when you book our services" },
              { step: "03", title: "Enjoy Service", desc: "Have access to flawless services for your vehicles" },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-bold text-red-600/30 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
                {idx < 2 && <div className="hidden md:block absolute top-12 -right-4 text-red-600 text-3xl">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need Emergency Assistance?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't wait! Call us now for fast, reliable towing and roadside assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:803-606-0370" className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
              📞 CALL NOW: 803-606-0370
            </a>
            <Link href="/contact">
              <a className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
                CONTACT US
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
