import { Link } from "wouter";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

/**
 * Contact Us Page - Lil Zeus Towing
 * Design: Contact form with business information
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

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
              <a className="text-white font-medium border-b-2 border-red-600">CONTACT US</a>
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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-2xl text-gray-300">We're Here to Help 24/7</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:border-red-600 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:border-red-600 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:border-red-600 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company (Optional)"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:border-red-600 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:border-red-600 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
                {submitted && (
                  <div className="p-4 bg-green-600/20 border border-green-600 rounded-lg text-green-300">
                    ✓ Thank you! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Contact Lil Zeus Towing today for affordable 24/7 towing, tire services, lockout assistance, and quick cash offers for your junk cars. We're here to provide efficient solutions to meet all your automotive needs.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-red-600 transition-colors">
                  <div className="flex items-center gap-4">
                    <Phone className="w-8 h-8 text-red-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-bold mb-1">Phone Number</h3>
                      <a href="tel:803-606-0370" className="text-red-500 hover:text-red-400 transition-colors">
                        803-606-0370
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-red-600 transition-colors">
                  <div className="flex items-center gap-4">
                    <Mail className="w-8 h-8 text-red-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-bold mb-1">Email Address</h3>
                      <a href="mailto:Lilzeustowing@gmail.com" className="text-red-500 hover:text-red-400 transition-colors">
                        Lilzeustowing@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-red-600 transition-colors">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-bold mb-1">Address</h3>
                      <p className="text-gray-300">
                        1006 Congaree Pointe Drive<br/>
                        Columbia SC 29209
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-red-600 transition-colors">
                  <div className="flex items-center gap-4">
                    <Clock className="w-8 h-8 text-red-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-bold mb-1">Business Hours</h3>
                      <p className="text-gray-300">24/7 Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Our Location</h2>
          <p className="text-center text-gray-300 text-lg mb-8">Serving Columbia, SC and Surrounding Areas</p>
          <div className="bg-slate-700/50 rounded-lg border border-slate-600 p-8 aspect-video flex items-center justify-center">
            <div className="text-center">
              <p className="text-4xl mb-4">📍</p>
              <p className="text-gray-300 text-lg">
                1006 Congaree Pointe Drive, Columbia SC 29209
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need Emergency Assistance?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Don't wait! Call us now for immediate towing and roadside assistance
          </p>
          <a href="tel:803-606-0370" className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
            📞 CALL NOW: 803-606-0370
          </a>
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
