import { motion } from "framer-motion";
import { Wrench, Smile, Palette, DollarSign, ShieldCheck } from "lucide-react";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Wrench,
      title: "Instalação Profissional",
      description:
        "Equipe treinada e experiente para garantir instalações perfeitas em cada projeto.",
    },
    {
      icon: Smile,
      title: "Satisfação do Cliente",
      description:
        "Nosso compromisso é sua satisfação. Trabalhamos até você estar 100% feliz.",
    },
    {
      icon: Palette,
      title: "Ampla Gama de Opções",
      description:
        "Variedade de materiais, cores e estilos para combinar com seu gosto e orçamento.",
    },
    {
      icon: DollarSign,
      title: "Preços Competitivos",
      description:
        "Oferecemos o melhor custo-benefício do mercado sem comprometer a qualidade.",
    },
    {
      icon: ShieldCheck,
      title: "Garantia de 1 Ano",
      description:
        "Todos os nossos serviços incluem 1 ano de garantia. Sua segurança é nossa prioridade.",
    },
  ];

  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Por Que Nos Escolher
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-2 mb-4">
            Excelência em Cada <span className="text-accent">Detalhe</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Descubra por que somos a escolha preferida para instalação de pisos na Flórida.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-xl text-center border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent mb-4">
                <reason.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold text-primary-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
