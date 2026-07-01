import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-black font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/"><a className="text-gray-600 hover:text-red-600 transition-colors">Home</a></Link></li>
              <li><Link href="/about"><a className="text-gray-600 hover:text-red-600 transition-colors">About Us</a></Link></li>
              <li><Link href="/service"><a className="text-gray-600 hover:text-red-600 transition-colors">Service</a></Link></li>
              <li><Link href="/process"><a className="text-gray-600 hover:text-red-600 transition-colors">Process</a></Link></li>
              <li><Link href="/contact"><a className="text-gray-600 hover:text-red-600 transition-colors">Contact Us</a></Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-black font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>24/7 Towing Service</li>
              <li>Lockout Service</li>
              <li>Tire Service</li>
              <li>Junk Car Removal</li>
              <li>Emergency Roadside</li>
            </ul>
          </div>
          <div>
            <h3 className="text-black font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="tel:803-606-0370" className="hover:text-red-600 transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4 text-red-600" />
                  803-606-0370
                </a>
              </li>
              <li>
                <a href="mailto:Lilzeustowing@gmail.com" className="hover:text-red-600 transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4 text-red-600" />
                  Lilzeustowing@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                <span>1006 Congaree Pointe Drive<br/>Columbia SC 29209</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-black font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 text-center text-gray-500">
          <p>© 2026 Lil Zeus Towing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
