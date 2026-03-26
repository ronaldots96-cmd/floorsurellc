import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 pt-16 pb-8 border-t-[6px] border-accent">
      <div className="container-custom px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          <div className="flex flex-col lg:col-span-4">
            <a href="#" className="mb-6 inline-block">
              <img 
                src="/logo-floorsure.png" 
                alt="FloorSure LLC Logo" 
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Premium flooring installation and restoration services across Central Florida. 
              We deliver craftsmanship you can stand on, backed by total transparency and local expertise.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/floorsurellc" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-accent hover:text-slate-900 transition-colors border border-slate-800 hover:border-accent"
              >
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a 
                href="https://www.instagram.com/floorsurellc/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-accent hover:text-slate-900 transition-colors border border-slate-800 hover:border-accent"
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:justify-self-center">
            <h4 className="text-white font-display font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-slate-400 hover:text-accent transition-colors text-sm">Our Services</a></li>
              <li><a href="#gallery" className="text-slate-400 hover:text-accent transition-colors text-sm">Project Gallery</a></li>
              <li><a href="#testimonials" className="text-slate-400 hover:text-accent transition-colors text-sm">Client Reviews</a></li>
              <li><a href="#faq" className="text-slate-400 hover:text-accent transition-colors text-sm">FAQs</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3 lg:justify-self-center">
            <h4 className="text-white font-display font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Our Services
            </h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-slate-400 hover:text-accent transition-colors text-sm">Hardwood Installation</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-accent transition-colors text-sm">Luxury Vinyl (LVP)</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-accent transition-colors text-sm">Dustless Refinishing</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-accent transition-colors text-sm">Stairs & Repairs</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-display font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+18624480588" className="hover:text-white transition-colors">
                  (862) 448-0588
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:contact@floorsure.com" className="hover:text-white transition-colors">
                  contact@floorsure.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>Serving Central Florida</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <Clock className="w-5 h-5 text-accent shrink-0" />
                <span>
                  Mon - Fri: 8:00 AM - 8:00 PM <br />
                  <span className="text-slate-500">Sat: By Appointment</span>
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {currentYear} FloorSure LLC. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;