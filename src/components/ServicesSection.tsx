import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import serviceHardwood from "@/assets/service-hardwood.jpg";
import serviceVinyl from "@/assets/service-vinyl.jpg";
import serviceLaminate from "@/assets/service-laminate.jpg";
import serviceStairs from "@/assets/service-stairs.jpg";

const ServicesSection = () => {
  const services = [
    {
      image: serviceHardwood,
      title: "Hardwood",
      description:
        "Timeless elegance that increases your home's market value. Crafted to last generations.",
      features: ["Solid Hardwood", "Engineered Wood", "Refinishing"],
      portfolio: [
        { type: "image", src: "/portfolio/hardwood/hardwood-1.jpg", alt: "Hardwood project 1" },
        { type: "image", src: "/portfolio/hardwood/hardwood-2.jpg", alt: "Hardwood project 2" },
        { type: "image", src: "/portfolio/hardwood/hardwood-3.jpg", alt: "Hardwood project 3" },
        { type: "image", src: "/portfolio/hardwood/hardwood-4.jpg", alt: "Hardwood project 4" },
        { type: "image", src: "/portfolio/hardwood/hardwood-5.jpg", alt: "Hardwood project 5" },
        { type: "image", src: "/portfolio/hardwood/hardwood-6.jpg", alt: "Hardwood project 6" },
      ]
    },
    {
      image: serviceVinyl,
      title: "Vinyl (LVP)",
      description:
        "100% waterproof and life-proof. The perfect choice for active Florida families and pets.",
      features: ["LVP (Luxury Vinyl Plank)", "Waterproof", "Easy Installation"],
      portfolio: [
        { type: "image", src: "/placeholder.svg", alt: "Vinyl project placeholder" },
      ]
    },
    {
      image: serviceLaminate,
      title: "Laminate",
      description:
        "High style, low maintenance. Enjoy the look of real wood without the upkeep.",
      features: ["Cost-Effective", "Variety of Styles", "Quick Installation"],
      portfolio: [
        { type: "image", src: "/placeholder.svg", alt: "Laminate project placeholder" },
      ]
    },
    {
      image: serviceStairs,
      title: "Stairs & Repairs",
      description:
        "Specialized stair restoration and precise repairs to bring your existing floors back to life.",
      features: ["Wood Stairs", "General Repairs", "Restoration"],
      portfolio: [
        { type: "image", src: "/placeholder.svg", alt: "Stairs project placeholder" },
      ]
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Complete <span className="text-primary">Flooring</span> Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a wide range of flooring installation and repair services, 
            always with top-quality materials.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-md card-hover flex flex-col"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                <h3 className="absolute bottom-4 left-6 font-display text-2xl font-bold text-warm-white">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        className="text-primary font-semibold hover:text-accent group/btn p-0"
                      >
                        View {service.title} Gallery
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </DialogTrigger>
                    
                    {/* Ajuste no DialogContent para garantir scroll vertical limpo */}
                    <DialogContent className="max-w-4xl bg-white border-slate-200 p-0 overflow-hidden flex flex-col h-[90vh] md:h-auto md:max-h-[90vh]">
                      <DialogHeader className="p-6 border-b border-slate-100">
                        <DialogTitle className="font-display text-2xl text-slate-900">
                          {service.title} Projects
                        </DialogTitle>
                        <DialogDescription className="text-slate-500">
                          Take a look at some of our recent {service.title.toLowerCase()} installations.
                        </DialogDescription>
                      </DialogHeader>
                      
                      {/* ==== GRID LAYOUT CORRIGIDO AQUI ==== */}
                      {/* columns-x removido. Usando grid puro. overflow-x-hidden adicionado por segurança. */}
                      <div className="flex-grow overflow-y-auto overflow-x-hidden p-6 bg-slate-50/50">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {service.portfolio.map((item, i) => (
                            <div 
                              key={i} 
                              // h-fit garante que o container do grid se ajuste à altura da imagem
                              className="relative rounded-xl overflow-hidden bg-white group/media shadow-sm border border-slate-100 h-fit"
                            >
                              {item.type === "video" ? (
                                <>
                                  <video
                                    controls
                                    preload="none"
                                    // Mantemos aspect-video para vídeos, pois geralmente são gravados em landscape
                                    className="w-full h-auto aspect-video object-cover"
                                  >
                                    <source src={item.src} type="video/mp4" />
                                  </video>
                                  <PlayCircle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-white/80 pointer-events-none group-hover/media:opacity-0 transition-opacity" />
                                </>
                              ) : (
                                <img
                                  src={item.src}
                                  alt={item.alt}
                                  loading="lazy"
                                  // h-auto e object-contain são a chave para NÃO ter zoom ruim no mobile
                                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                                />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent text-lg px-8 h-14"
          >
            <a href="#contact">
              Request Your Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
