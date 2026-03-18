import { motion } from "framer-motion";
import { MapPin, CheckCircle2 } from "lucide-react";
// Importando a imagem do mapa que você deve colocar na pasta src/assets/
import serviceMap from "@/assets/florida-service-map.png"; 

const ServiceAreaSection = () => {
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
            
            {/* TÍTULO: Destaque em bloco para garantir contraste máximo */}
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-center lg:text-left leading-tight">
              Serving <span className="inline-block bg-accent text-white px-3 py-1 rounded-xl shadow-md mt-2 md:mt-0">Central Florida</span> with Pride
            </h2>
            
            <p className="text-slate-600 text-lg mb-8 text-center lg:text-left">
              We bring our showroom to you! Our specialized teams are ready to transform homes and businesses across the region. We guarantee timely arrivals, flawless execution, and total respect for your property.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {serviceAreas.map((city, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-slate-700 font-medium text-lg">{city}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Image Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 group"
          >
            {/* Container da Imagem */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <img 
                src={serviceMap} 
                alt="Map showing FloorSure LLC service areas in Central Florida" 
                className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Selo Flutuante de Status (Estilo "Live") */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-full shadow-lg border border-slate-100 flex items-center gap-3">
              {/* Ponto Pulsante */}
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </div>
              <span className="text-sm font-bold text-slate-800 uppercase tracking-wider">Service Area</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection;
