import { motion } from "framer-motion";
import { MessageSquare, FileText, HardHat, CheckCircle2 } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Consulta",
      description:
        "Entre em contato conosco para discutir suas necessidades e agendar uma visita técnica gratuita.",
    },
    {
      icon: FileText,
      number: "02",
      title: "Orçamento",
      description:
        "Avaliamos seu espaço e preparamos um orçamento detalhado, transparente e sem surpresas.",
    },
    {
      icon: HardHat,
      number: "03",
      title: "Instalação",
      description:
        "Nossa equipe profissional realiza a instalação com precisão, limpeza e no prazo acordado.",
    },
    {
      icon: CheckCircle2,
      number: "04",
      title: "Inspeção Final",
      description:
        "Fazemos uma inspeção completa juntos para garantir sua total satisfação com o resultado.",
    },
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Nosso Processo
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Como <span className="text-primary">Trabalhamos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Um processo simples e transparente do início ao fim do seu projeto.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/20 via-accent to-accent/20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Number Circle */}
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-background shadow-lg mb-6 z-10">
                  <span className="font-display text-2xl font-bold text-accent">
                    {step.number}
                  </span>
                  <div className="absolute -inset-1 rounded-full border-2 border-accent/30" />
                </div>

                {/* Icon */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-accent">
                  <step.icon className="w-5 h-5 text-accent-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
