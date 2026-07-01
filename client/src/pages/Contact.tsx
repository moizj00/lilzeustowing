import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Dark Navy */}
      <section className="bg-[#0a1628] py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-gray-300">We're Here to Help 24/7</p>
        </div>
      </section>

      {/* Contact Content - White */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <span className="text-sm font-bold text-red-600 uppercase tracking-wider">Get In Touch</span>
              <h2 className="text-3xl md:text-4xl font-bold text-black mt-2 mb-8">
                Send Us a <span className="text-red-600 italic">Message</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded bg-gray-50 border border-gray-200 text-black placeholder-gray-400 focus:border-red-600 focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 rounded bg-gray-50 border border-gray-200 text-black placeholder-gray-400 focus:border-red-600 focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 rounded bg-gray-50 border border-gray-200 text-black placeholder-gray-400 focus:border-red-600 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company (Optional)"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded bg-gray-50 border border-gray-200 text-black placeholder-gray-400 focus:border-red-600 focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 rounded bg-gray-50 border border-gray-200 text-black placeholder-gray-400 focus:border-red-600 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
                {submitted && (
                  <div className="p-4 bg-green-50 border border-green-300 rounded text-green-700">
                    Thank you! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <span className="text-sm font-bold text-red-600 uppercase tracking-wider">Contact Info</span>
              <h2 className="text-3xl md:text-4xl font-bold text-black mt-2 mb-8">
                Get In <span className="text-red-600 italic">Touch</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Contact Lil Zeus Towing today for affordable 24/7 towing, tire services, lockout assistance, and quick cash offers for your junk cars. We're here to provide efficient solutions to meet all your automotive needs.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-red-300 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-black font-bold mb-1">Phone Number</h3>
                      <a href="tel:803-606-0370" className="text-red-600 hover:text-red-700 transition-colors">
                        803-606-0370
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-red-300 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-black font-bold mb-1">Email Address</h3>
                      <a href="mailto:Lilzeustowing@gmail.com" className="text-red-600 hover:text-red-700 transition-colors">
                        Lilzeustowing@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-red-300 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-black font-bold mb-1">Address</h3>
                      <p className="text-gray-600">
                        1006 Congaree Pointe Drive<br/>
                        Columbia SC 29209
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-red-300 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-black font-bold mb-1">Business Hours</h3>
                      <p className="text-gray-600">24/7 Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Light Gray */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-red-600 uppercase tracking-wider">Find Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
              Our <span className="text-red-600 italic">Location</span>
            </h2>
          </div>
          <p className="text-center text-gray-600 text-lg mb-8">Serving Columbia, SC and Surrounding Areas</p>
          <div className="bg-gray-200 rounded-lg p-8 aspect-video flex items-center justify-center max-w-4xl mx-auto">
            <div className="text-center text-gray-500">
              <MapPin className="w-12 h-12 mx-auto mb-2" />
              <p className="text-lg">
                1006 Congaree Pointe Drive, Columbia SC 29209
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Red */}
      <section className="py-16 md:py-24 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Emergency Assistance?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't wait! Call us now for immediate towing and roadside assistance
          </p>
          <a href="tel:803-606-0370" className="inline-block bg-white text-red-600 px-8 py-4 rounded font-bold text-lg hover:bg-gray-100 transition-colors">
            CALL NOW: 803-606-0370
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
