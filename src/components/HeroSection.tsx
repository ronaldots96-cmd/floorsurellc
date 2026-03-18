import { motion } from "framer-motion";
import { ArrowRight, Star, HardHat, ShieldCheck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-flooring.jpg";
import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Media */}
        <div className="absolute inset-0 z-0 bg-charcoal">
          <img
            src={heroImage}
            alt="Beautiful hardwood flooring installation"
            className="hidden md:block w-full h-full object-cover"
          />

          <video
            autoPlay
            loop
            muted
            playsInline
            poster={heroImage}
            className="block md:hidden w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom section-padding pt-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                When it comes to <span className="text-accent">floor</span>, you can be <span className="text-accent">Sure</span>.
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0">
                Expert installation and refinishing tailored to Central Florida homes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent text-lg px-8 h-14"
                >
                  <a href="#contact">
                    Get My Free Estimate
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 text-lg font-medium text-white border-white/40 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:text-white transition-all"
                >
                  <a href="#gallery">View Our Work</a>
                </Button>
              </div>
            </motion.div>

            {/* Right Side - Quick Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-slate-100">
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
                  Request Your Quote
                </h3>
                <p className="text-slate-600 mb-6">
                  Fill out the form and we'll contact you within 24 hours.
                </p>
                <form className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent" required />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent" required />
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent" required />
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent text-slate-600">
                    <option value="">Type of Service</option>
                    <option value="hardwood">Hardwood Flooring</option>
                    <option value="vinyl">Vinyl Flooring</option>
                    <option value="laminate">Laminate Flooring</option>
                    <option value="stairs">Stairs</option>
                    <option value="repair">Repairs</option>
                  </select>
                  <Button type="submit" className="w-full h-14 bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent text-lg font-semibold">
                    Schedule Free Estimate
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar (Social Proof) */}
      <div className="bg-slate-900 border-t border-slate-800 py-6">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Star, text: "5-Star Rated" },
              { icon: HardHat, text: "500+ Projects Completed" },
              { icon: ShieldCheck, text: "1-Year Warranty" },
              { icon: MapPin, text: "Locally Owned & Operated" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <item.icon className="w-6 h-6 text-accent" />
                <span className="text-sm md:text-base font-medium text-white/90">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
