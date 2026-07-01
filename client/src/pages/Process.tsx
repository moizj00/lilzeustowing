import { Link } from "wouter";
import { Phone, MapPin, Wrench, CheckCircle } from "lucide-react";

/**
 * Process Page - Lil Zeus Towing
 * Design: Step-by-step process visualization
 */

const processSteps = [
  {
    step: "01",
    icon: Phone,
    title: "Make a Call",
    desc: "Get instant replies when you call our operators at 803-606-0370",
    details: "Our friendly dispatchers are available 24/7 to take your call. Provide your location and describe your situation, and we'll immediately send help your way.",
  },
  {
    step: "02",
    icon: MapPin,
    title: "We Locate You",
    desc: "Our GPS system helps us find your exact location quickly",
    details: "Using advanced GPS technology, we pinpoint your exact location and dispatch the nearest available tow truck to ensure the fastest response time possible.",
  },
  {
    step: "03",
    icon: Wrench,
    title: "Half Hour Arrival",
    desc: "Fast response time - typically under 30 minutes",
    details: "Our strategically positioned fleet ensures we can reach you quickly. We keep you updated on our arrival time throughout the process.",
  },
  {
    step: "04",
    icon: CheckCircle,
    title: "Professional Service",
    desc: "Expert technicians handle your vehicle with care",
    details: "Our trained professionals assess the situation and use proper equipment to safely tow or service your vehicle. We treat your car like our own.",
  },
  {
    step: "05",
    icon: Wrench,
    title: "Enjoy Service",
    desc: "Have access to flawless services which ensures the best possible for your vehicles",
    details: "We ensure your vehicle is transported safely to your desired destination. Your satisfaction and vehicle safety are our top priorities.",
  },
  {
    step: "06",
    icon: CheckCircle,
    title: "Easy Payment",
    desc: "Multiple payment options for your convenience",
    details: "We accept cash, credit cards, and work with most insurance companies. Transparent pricing with no hidden fees.",
  },
];

export default function Process() {
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
              <a className="text-white font-medium border-b-2 border-red-600">PROCESS</a>
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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Process</h1>
          <p className="text-2xl text-gray-300">Simple, Fast, and Reliable Towing Process</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">How It Works</h2>
          <p className="text-center text-gray-300 text-lg mb-16 max-w-2xl mx-auto">
            Our streamlined process ensures you get help quickly and efficiently
          </p>

          {/* Process Steps */}
          <div className="space-y-12">
            {processSteps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-red-600 text-white font-bold text-2xl">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-grow bg-slate-700/50 p-8 rounded-lg border border-slate-600 hover:border-red-600 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-6 h-6 text-red-600" />
                      <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-3">{item.desc}</p>
                    <p className="text-gray-400 text-sm">{item.details}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Best Process Summary */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Best Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Make a Call", desc: "Get instant replies when you call our operators at 803-606-0370" },
              { step: "02", title: "Half Hour Arrival", desc: "Get instant response when you book our services." },
              { step: "03", title: "Enjoy Service", desc: "Have access to flawless services which ensures the best possible for your vehicles" },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800/50 p-8 rounded-lg border border-slate-600 hover:border-red-600 transition-colors text-center">
                <div className="text-5xl font-bold text-red-600 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="py-16 md:py-24 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Why Our Process Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "24/7", title: "Always Available", desc: "We never close our lines. Call anytime, day or night." },
              { stat: "<30", title: "Minutes Response", desc: "Fast arrival time gets you back on track quickly." },
              { stat: "100%", title: "Professional", desc: "Trained experts handle every situation with care." },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-700/50 p-8 rounded-lg border border-slate-600 text-center hover:border-red-600 transition-colors">
                <div className="text-5xl font-bold text-red-600 mb-4">{item.stat}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience Our Service?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Call us now and see how easy it is to get professional towing assistance
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
