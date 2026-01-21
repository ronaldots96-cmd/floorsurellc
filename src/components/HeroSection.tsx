import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-flooring.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful hardwood flooring installation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/50" />
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
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6"
            >
              ✨ Instalação Profissional com 1 Ano de Garantia
            </motion.span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-warm-white leading-tight mb-6">
              FloorSure Flooring LLC:{" "}
              <span className="text-accent">A Escolha Certa</span> para Seus Pisos e Escadas
            </h1>

            <p className="text-lg md:text-xl text-warm-white/80 mb-8 max-w-2xl">
              Qualidade Incomparável e Atendimento Personalizado na Flórida Central e Norte. 
              Transforme seu espaço com acabamentos que duram.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent text-lg px-8"
              >
                <a href="#contact">
                  Obtenha um Orçamento Gratuito
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-warm-white/30 text-warm-white hover:bg-warm-white/10 text-lg px-8"
              >
                <a href="#services">Nossos Serviços</a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              {[
                "Mais de 500 Projetos",
                "Garantia de 1 Ano",
                "Orçamento Grátis",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 text-warm-white/90"
                >
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Quick Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="bg-background/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Solicite seu Orçamento
              </h3>
              <p className="text-muted-foreground mb-6">
                Preencha o formulário e entraremos em contato em até 24 horas.
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Seu Nome"
                  className="input-styled"
                  required
                />
                <input
                  type="tel"
                  placeholder="Telefone"
                  className="input-styled"
                  required
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="input-styled"
                  required
                />
                <select className="input-styled text-muted-foreground">
                  <option value="">Tipo de Serviço</option>
                  <option value="hardwood">Piso de Madeira</option>
                  <option value="vinyl">Piso Vinílico</option>
                  <option value="laminate">Piso Laminado</option>
                  <option value="stairs">Escadas</option>
                  <option value="repair">Reparos</option>
                </select>
                <Button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent text-lg py-6"
                >
                  Agendar Avaliação Gratuita
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-warm-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-3 bg-accent rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
