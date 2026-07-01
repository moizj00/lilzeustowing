import { Link } from "wouter";
import { CircleCheck as CheckCircle, Truck, Users, Award, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Dark Navy */}
      <section className="bg-[#0a1628] py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Us</h1>
          <p className="text-xl md:text-2xl text-gray-300">Your Trusted Towing Partner Since 2008</p>
        </div>
      </section>

      {/* Main Content - White */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="text-sm font-bold text-red-600 uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-black mt-2 mb-6">
                Lil <span className="text-red-600 italic">Zeus</span> Towing
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Welcome to Lil Zeus Towing, your trusted towing company with 15 years of dedicated service to the Columbia, SC area. We take pride in being your reliable partner, offering affordable and efficient 24/7 towing services, ensuring we're there for you when emergencies strike, day or night.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our skilled team is well-equipped to handle any tire-related issues promptly, and our lockout services will have you back inside your vehicle with ease. But that's not all – if you have an old car taking up space, we'll gladly buy your junk cars with cash, providing a seamless and quick process.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Count on Lil Zeus Towing to deliver top-quality services with a friendly and professional approach, making your satisfaction our ultimate goal.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Truck className="w-16 h-16 mx-auto mb-2" />
                <p className="text-3xl font-bold">15+</p>
                <p className="text-xl">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Light Gray */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-red-600 uppercase tracking-wider">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
              Our <span className="text-red-600 italic">Values</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Excellence", desc: "We strive for excellence in every service we provide, ensuring the highest quality standards." },
              { icon: Users, title: "Reliability", desc: "24/7 availability means we're always there when you need us most, day or night." },
              { icon: Heart, title: "Customer First", desc: "Your satisfaction is our top priority. We treat every customer like family." },
              { icon: CheckCircle, title: "Professionalism", desc: "Our skilled team brings years of experience and dedication to every job." },
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 hover:border-red-300 transition-colors text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us - White */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-red-600 uppercase tracking-wider">Why Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
              Why Choose <span className="text-red-600 italic">Us</span>?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "24/7", title: "Always Available", desc: "We never close. Day or night, we're here for you." },
              { stat: "<30", title: "Minutes Response", desc: "Quick arrival time to get you back on the road fast." },
              { stat: "100%", title: "Satisfaction", desc: "Your satisfaction is our ultimate goal." },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-center hover:border-red-300 transition-colors">
                <div className="text-5xl font-bold text-red-600 mb-4">{item.stat}</div>
                <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Red */}
      <section className="py-16 md:py-24 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Towing Assistance?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today and experience the best towing service in Columbia, SC
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
