import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    },
    {
      image: serviceVinyl,
      title: "Vinyl (LVP)",
      description:
        "100% waterproof and life-proof. The perfect choice for active Florida families and pets.",
      features: ["LVP (Luxury Vinyl Plank)", "Waterproof", "Easy Installation"],
    },
    {
      image: serviceLaminate,
      title: "Laminate",
      description:
        "High style, low maintenance. Enjoy the look of real wood without the upkeep.",
      features: ["Cost-Effective", "Variety of Styles", "Quick Installation"],
    },
    {
      image: serviceStairs,
      title: "Stairs & Repairs",
      description:
        "Specialized stair restoration and precise repairs to bring your existing floors back to life.",
      features: ["Wood Stairs", "General Repairs", "Restoration"],
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
              className="group bg-card rounded-2xl overflow-hidden shadow-md card-hover"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                <h3 className="absolute bottom-4 left-6 font-display text-2xl font-bold text-warm-white">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
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
                <Button
                  variant="ghost"
                  className="text-primary font-semibold hover:text-accent group/btn p-0"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
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
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent text-lg px-8"
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
