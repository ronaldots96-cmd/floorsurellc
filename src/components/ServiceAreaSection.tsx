import { motion } from "framer-motion";
import { MapPin, CheckCircle2 } from "lucide-react";

const ServiceAreaSection = () => {
  // Lista de cidades com base na área de atuação de Central Florida (PDF)
  const serviceAreas = [
    "Orlando",
    "Lakeland",
    "The Villages",
    "Clermont",
    "Kissimmee",
    "Winter Garden",
    "Davenport",
    "Windermere"
  ];

  return (
    <section id="service-area" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text & Cities */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider flex items-center gap-2 mb-4 justify-center lg:justify-start">
              <MapPin className="w-5 h-5" /> Locally Owned & Operated
            </span>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-center lg:text-left">
              Serving <span className="text-primary">Central Florida</span> with Pride
            </h2>
            
            <p className="text-slate-600 text-lg mb-8 text-center lg:text-left">
              We bring our showroom to you! Our specialized teams are ready to transform homes and businesses across the region. We guarantee timely arrivals, flawless execution, and total respect for your property.
            </p>

            {/* Scannable Cities List */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {serviceAreas.map((city, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-slate-700 font-medium text-lg">{city}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Map Iframe */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-slate-100 group"
          >
            {/* O iframe foi ajustado para preencher 100% do container pai */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617386.2860808433!2d-83.804601!3d27.698638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25800f16a37551a3%3A0x89aa48da2224cd51!2sFloorSure%20Flooring%20LLC!5e0!3m2!1spt-PT!2sbr!4v1773794875640!5m2!1spt-PT!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale-[20%] transition-all duration-500 group-hover:grayscale-0"
              title="FloorSure LLC Service Area Map"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection;
