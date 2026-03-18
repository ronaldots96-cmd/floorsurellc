import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavLink from "./NavLink";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo Section */}
        <a href="#" className="flex items-center gap-2">
          <img 
            src="/logo-floorsure.png" 
            alt="FloorSure LLC" 
            // Invertemos o logo para branco se não houver scroll, para manter visibilidade
            className={`h-10 w-auto transition-all duration-300 ${!scrolled ? "brightness-0 invert" : ""}`}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              href={link.href}
              // Passamos a cor dinâmica: branco antes do scroll, slate-700 depois
              className={`font-medium transition-colors ${
                scrolled ? "text-slate-700 hover:text-primary" : "text-white hover:text-accent"
              }`}
            >
              {link.name}
            </NavLink>
          ))}
          <Button 
            className={`rounded-full px-6 transition-all duration-300 ${
              scrolled 
                ? "bg-primary text-white hover:bg-primary/90" 
                : "bg-accent text-slate-900 hover:bg-white"
            }`}
          >
            Get a Quote
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-slate-900" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-slate-900 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-slate-100" />
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-slate-600">
                  <Phone size={20} className="text-primary" />
                  <span className="font-semibold">(862) 448-0588</span>
                </div>
                <Button className="w-full bg-primary text-white py-6 text-lg">
                  Get Free Estimate
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
