import { Link } from "wouter";
import { CheckCircle } from "lucide-react";

/**
 * About Us Page - Lil Zeus Towing
 * Design: Professional company story with values and achievements
 */

export default function About() {
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
              <a className="text-white font-medium border-b-2 border-red-600">ABOUT US</a>
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
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Us</h1>
          <p className="text-2xl text-gray-300">Your Trusted Towing Partner Since 2008</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Lil Zeus Towing</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Welcome to Lil Zeus Towing, your trusted towing company with 15 years of dedicated service to the Columbia, SC area. We take pride in being your reliable partner, offering affordable and efficient 24/7 towing services, ensuring we're there for you when emergencies strike, day or night.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our skilled team is well-equipped to handle any tire-related issues promptly, and our lockout services will have you back inside your vehicle with ease. But that's not all – if you have an old car taking up space, we'll gladly buy your junk cars with cash, providing a seamless and quick process.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Count on Lil Zeus Towing to deliver top-quality services with a friendly and professional approach, making your satisfaction our ultimate goal.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-600/20 to-slate-700/20 rounded-lg p-8 border border-red-600/30">
              <div className="aspect-video bg-slate-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-center">
                  <p className="text-4xl font-bold mb-2">15+</p>
                  <p className="text-xl">Years Experience</p>
                </span>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Excellence", desc: "We strive for excellence in every service we provide, ensuring the highest quality standards." },
                { title: "Reliability", desc: "24/7 availability means we're always there when you need us most, day or night." },
                { title: "Customer First", desc: "Your satisfaction is our top priority. We treat every customer like family." },
                { title: "Professionalism", desc: "Our skilled team brings years of experience and dedication to every job." },
              ].map((value, idx) => (
                <div key={idx} className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-red-600 transition-colors">
                  <CheckCircle className="w-8 h-8 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300 text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { stat: "24/7", title: "Always Available", desc: "We never close. Day or night, we're here for you." },
                { stat: "<30", title: "Minutes Response", desc: "Quick arrival time to get you back on the road fast." },
                { stat: "100%", title: "Satisfaction", desc: "Your satisfaction is our ultimate goal." },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-700/50 p-8 rounded-lg border border-slate-600 text-center">
                  <div className="text-5xl font-bold text-red-600 mb-4">{item.stat}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
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
            Need Towing Assistance?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today and experience the best towing service in Columbia, SC
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
