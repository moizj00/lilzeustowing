import { Link } from "wouter";
import { Phone, MapPin, Wrench, CircleCheck as CheckCircle, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    icon: DollarSign,
    title: "Easy Payment",
    desc: "Multiple payment options for your convenience",
    details: "We accept cash, credit cards, and work with most insurance companies. Transparent pricing with no hidden fees.",
  },
];

export default function Process() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Dark Navy */}
      <section className="bg-[#0a1628] py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Process</h1>
          <p className="text-xl md:text-2xl text-gray-300">Simple, Fast, and Reliable Towing Process</p>
        </div>
      </section>

      {/* How It Works - White */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-red-600 uppercase tracking-wider">Step by Step</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
              How It <span className="text-red-600 italic">Works</span>
            </h2>
          </div>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            Our streamlined process ensures you get help quickly and efficiently
          </p>

          {/* Process Steps */}
          <div className="space-y-8">
            {processSteps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex gap-6 items-start max-w-4xl mx-auto">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-red-600">{item.step}</span>
                    </div>
                  </div>
                  <div className="flex-grow bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-red-300 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-5 h-5 text-red-600" />
                      <h3 className="text-xl font-bold text-black">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-2">{item.desc}</p>
                    <p className="text-gray-500 text-sm">{item.details}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Best Process Summary - Light Gray */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-red-600 uppercase tracking-wider">Quick Overview</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
              Best <span className="text-red-600 italic">Process</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Make a Call", desc: "Get instant replies when you call our operators at 803-606-0370" },
              { step: "02", title: "Half Hour Arrival", desc: "Get instant response when you book our services." },
              { step: "03", title: "Enjoy Service", desc: "Have access to flawless services for your vehicles" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200 hover:border-red-300 transition-colors text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-red-600">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Process Works - White */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-red-600 uppercase tracking-wider">Our Guarantee</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
              Why Our Process <span className="text-red-600 italic">Works</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "24/7", title: "Always Available", desc: "We never close our lines. Call anytime, day or night." },
              { stat: "<30", title: "Minutes Response", desc: "Fast arrival time gets you back on track quickly." },
              { stat: "100%", title: "Professional", desc: "Trained experts handle every situation with care." },
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
            Ready to Experience Our Service?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Call us now and see how easy it is to get professional towing assistance
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
