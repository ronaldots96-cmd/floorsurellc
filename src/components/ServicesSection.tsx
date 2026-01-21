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
      title: "Piso de Madeira",
      description:
        "Instalação profissional de pisos de madeira maciça e engenheirada. Elegância atemporal para sua casa.",
      features: ["Madeira Maciça", "Madeira Engenheirada", "Restauração"],
    },
    {
      image: serviceVinyl,
      title: "Piso Vinílico",
      description:
        "Pisos vinílicos de alta qualidade, resistentes à água e fáceis de manter. Perfeitos para áreas úmidas.",
      features: ["LVP (Luxury Vinyl Plank)", "Resistente à Água", "Fácil Instalação"],
    },
    {
      image: serviceLaminate,
      title: "Piso Laminado",
      description:
        "Opção econômica que não compromete a beleza. Variedade de estilos e padrões disponíveis.",
      features: ["Custo-Benefício", "Variedade de Estilos", "Instalação Rápida"],
    },
    {
      image: serviceStairs,
      title: "Escadas & Reparos",
      description:
        "Instalação e reparo de escadas de madeira. Reparos especializados para todos os tipos de pisos.",
      features: ["Escadas de Madeira", "Reparos Gerais", "Restauração"],
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
            Nossos Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Soluções Completas em <span className="text-primary">Pisos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma ampla gama de serviços de instalação e reparo de pisos, 
            sempre com materiais de primeira qualidade.
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
                  Saiba Mais
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
              Solicite seu Orçamento
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
