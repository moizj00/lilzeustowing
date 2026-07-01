import { Link } from "wouter";
import { Wrench, Lock, Zap, DollarSign, CircleAlert as AlertCircle, TrendingUp, CircleCheck as CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Dark Navy */}
      <section className="bg-[#0a1628] py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-gray-300">Comprehensive Towing & Roadside Assistance Solutions</p>
        </div>
      </section>

      {/* Services Grid - White */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-red-600 uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
              More <span className="text-red-600 italic">Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200 hover:border-red-300 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.desc}</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, fidx) => (
                          <li key={fidx} className="text-gray-600 text-sm flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section - Light Gray */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-red-600 uppercase tracking-wider">Our Promise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
              Why Choose <span className="text-red-600 italic">Us</span>?
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Fast Response", desc: "Average arrival time under 30 minutes" },
              { icon: CheckCircle, title: "Licensed & Insured", desc: "Fully certified professional service" },
              { icon: DollarSign, title: "Affordable Rates", desc: "Competitive pricing for all services" },
              { icon: Wrench, title: "24/7 Availability", desc: "Always here when you need us" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:border-red-300 transition-colors">
                  <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Red */}
      <section className="py-16 md:py-24 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Immediate Assistance?
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
                GET A QUOTE
              </a>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
