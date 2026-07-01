import { Link } from "wouter";
import { Phone, Clock, Zap, MapPin, Wrench, Lock, DollarSign, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Dark Navy */}
      <section className="bg-[#0a1628] py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              24/7 TOWING SERVICE
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Serving Columbia, SC and Surrounding Areas
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:803-606-0370" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded font-bold text-lg transition-colors inline-block text-center">
                GET HELP NOW
              </a>
              <Link href="/contact">
                <a className="border-2 border-red-600 text-white px-8 py-4 rounded font-bold text-lg hover:bg-red-600/10 transition-colors inline-block text-center">
                  CONTACT US
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - White */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">25+ YEARS EXPERIENCE</h3>
              <p className="text-gray-600">Decades of expertise in towing and roadside assistance</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">SHORT ARRIVAL TIME</h3>
              <p className="text-gray-600">Quick response within 30 minutes or less</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">AVAILABLE 24/7</h3>
              <p className="text-gray-600">Round-the-clock service for your emergencies</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Light Gray */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-bold text-red-600 uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-black mt-2 mb-6">
                Welcome to <span className="text-red-600 italic">Lil Zeus</span> Towing
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Your trusted towing company with 15 years of dedicated service to the Columbia, SC area. We take pride in being your reliable partner, offering affordable and efficient 24/7 towing services.
              </p>
              <Link href="/about">
                <a className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-bold transition-colors">
                  Learn More
                </a>
              </Link>
            </div>
            <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Truck className="w-16 h-16 mx-auto mb-2" />
                <p>Professional Towing Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - White */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-red-600 uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
              More <span className="text-red-600 italic">Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Truck, title: "24/7 Towing", desc: "Professional towing services available around the clock" },
              { icon: Lock, title: "Lockout Service", desc: "Quick and safe vehicle lockout assistance" },
              { icon: Wrench, title: "Tire Service", desc: "Fast tire changes and repairs on the road" },
              { icon: DollarSign, title: "Junk Car Removal", desc: "Cash on the spot for your old vehicles" },
              { icon: Zap, title: "Roadside Assistance", desc: "Jump starts, fuel delivery, and more" },
              { icon: MapPin, title: "Accident Recovery", desc: "Safe recovery with insurance coordination" },
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 hover:border-red-300 transition-colors text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link href="/service">
              <a className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-bold transition-colors">
                View All Services
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Junk Cars Banner - Dark */}
      <section className="py-16 md:py-20 bg-[#0a1628]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            We Buy <span className="text-red-500 italic">Junk Cars</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get cash on the spot for your old vehicles - any condition!
          </p>
          <a href="tel:803-606-0370" className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded font-bold text-lg transition-colors">
            Call Now: 803-606-0370
          </a>
        </div>
      </section>

      {/* Process Section - White */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-red-600 uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
              Our <span className="text-red-600 italic">Process</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Make a Call", desc: "Get instant replies when you call our operators at 803-606-0370" },
              { step: "02", title: "Half Hour Arrival", desc: "Get instant response when you book our services" },
              { step: "03", title: "Enjoy Service", desc: "Have access to flawless services for your vehicles" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/process">
              <a className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-bold transition-colors">
                Learn More
              </a>
            </Link>
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
            Don't wait! Call us now for fast, reliable towing and roadside assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:803-606-0370" className="bg-white text-red-600 px-8 py-4 rounded font-bold text-lg hover:bg-gray-100 transition-colors">
              CALL NOW: 803-606-0370
            </a>
            <Link href="/contact">
              <a className="border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors">
                CONTACT US
              </a>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
