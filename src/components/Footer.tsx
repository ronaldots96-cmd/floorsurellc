import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer id="contact" className="bg-charcoal">
      {/* Main Footer Content */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Appointment Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Contact
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-warm-white mt-2 mb-4">
                Schedule Your <span className="text-accent">Free Estimate</span>
              </h2>
              <p className="text-warm-white/70 mb-8">
                Fill out the form and our team will contact you within 24 hours.
              </p>

              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    className="w-full px-4 py-3 bg-warm-white/10 border border-warm-white/20 rounded-lg text-warm-white placeholder:text-warm-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    className="w-full px-4 py-3 bg-warm-white/10 border border-warm-white/20 rounded-lg text-warm-white placeholder:text-warm-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50"
                    required
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="w-full px-4 py-3 bg-warm-white/10 border border-warm-white/20 rounded-lg text-warm-white placeholder:text-warm-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50"
                  required
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <select className="w-full px-4 py-3 bg-warm-white/10 border border-warm-white/20 rounded-lg text-warm-white/70 focus:outline-none focus:ring-2 focus:ring-accent/50">
                    <option value="">Type of Service</option>
                    <option value="hardwood">Hardwood Flooring</option>
                    <option value="vinyl">Vinyl Flooring</option>
                    <option value="laminate">Laminate Flooring</option>
                    <option value="stairs">Stairs</option>
                    <option value="repair">Repairs</option>
                  </select>
                  <input
                    type="text"
                    placeholder="City / Area"
                    className="w-full px-4 py-3 bg-warm-white/10 border border-warm-white/20 rounded-lg text-warm-white placeholder:text-warm-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                </div>
                <textarea
                  placeholder="Describe your project..."
                  rows={4}
                  className="w-full px-4 py-3 bg-warm-white/10 border border-warm-white/20 rounded-lg text-warm-white placeholder:text-warm-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                />
                <Button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent text-lg py-6"
                >
                  Request Free Estimate
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </motion.div>

            {/* Right - Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:pl-12"
            >
              {/* Logo */}
              <div className="mb-8">
                <img 
                  src={logo} 
                  alt="FloorSure Flooring LLC" 
                  className="h-16 w-auto"
                />
              </div>

              <p className="text-warm-white/70 mb-8 leading-relaxed">
                Flooring installation and repair specialists in Central and North Florida. 
                Unmatched quality with a 1-year warranty on all services.
              </p>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                <a
                  href="tel:+18624480588"
                  className="flex items-center gap-4 text-warm-white hover:text-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-warm-white/60">Phone</p>
                    <p className="font-semibold">(862) 448-0588</p>
                  </div>
                </a>

                <a
                  href="mailto:floorsurellc@outlook.com"
                  className="flex items-center gap-4 text-warm-white hover:text-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-warm-white/60">Email</p>
                    <p className="font-semibold">floorsurellc@outlook.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-warm-white">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-warm-white/60">Service Area</p>
                    <p className="font-semibold">Central & North Florida</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-warm-white font-semibold mb-4">Quick Links</h4>
                <div className="grid grid-cols-2 gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-warm-white/60 hover:text-accent transition-colors text-sm py-1"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-warm-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-warm-white/50 text-sm text-center md:text-left">
            © {currentYear} FloorSure Flooring LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-warm-white/50 hover:text-accent text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-warm-white/50 hover:text-accent text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
