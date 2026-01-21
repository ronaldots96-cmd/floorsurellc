import { motion } from "framer-motion";
import { Shield, Award, Users, Clock } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Clock, value: "10+", label: "Anos de Experiência" },
    { icon: Users, value: "500+", label: "Clientes Satisfeitos" },
    { icon: Award, value: "1 Ano", label: "Garantia" },
    { icon: Shield, value: "100%", label: "Qualidade Garantida" },
  ];

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Sobre Nós
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Transformando Espaços com{" "}
              <span className="text-primary">Excelência</span> e Dedicação
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A <strong className="text-foreground">FloorSure Flooring LLC</strong> nasceu da paixão por 
              transformar ambientes através de pisos de alta qualidade. Com sede na Flórida Central, 
              atendemos toda a região com profissionalismo e comprometimento.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Nossa missão é oferecer soluções de pisos que combinam beleza, durabilidade e 
              custo-benefício. Cada projeto é tratado com cuidado personalizado, garantindo 
              resultados que superam expectativas.
            </p>

            <div className="bg-primary/10 p-6 rounded-xl border-l-4 border-accent">
              <p className="text-foreground font-medium text-lg">
                "Oferecemos <span className="text-accent font-bold">1 ano de garantia</span> em 
                todos os nossos serviços de instalação — nossa promessa de qualidade para você."
              </p>
            </div>
          </motion.div>

          {/* Right - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-background p-6 rounded-xl shadow-md text-center card-hover"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                  <stat.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
