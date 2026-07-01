import { Link, useLocation } from "wouter";
import { Phone } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT US" },
    { href: "/service", label: "SERVICE" },
    { href: "/process", label: "PROCESS" },
    { href: "/contact", label: "CONTACT US" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
              <span className="text-white font-bold text-lg">LZ</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold text-lg leading-tight block">LIL ZEUS</span>
              <span className="text-red-500 font-bold text-sm leading-tight">TOWING</span>
            </div>
          </a>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={`font-medium transition-colors ${
                  location === link.href
                    ? "text-red-500"
                    : "text-white hover:text-red-400"
                }`}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </div>

        <a
          href="tel:803-606-0370"
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded font-bold flex items-center gap-2 transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">803-606-0370</span>
          <span className="sm:hidden">CALL</span>
        </a>
      </div>
    </nav>
  );
}
