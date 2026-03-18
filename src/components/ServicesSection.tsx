import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageSquare, FileText, HardHat, CheckCircle2 } from "lucide-react";

// 1. IMPORTAMOS A IMAGEM DIRETAMENTE (Garante que o Vite a encontra!)
import bgPattern from "@/assets/herringbone-wood-flooring-texture.jpg";

const ProcessSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], 
  });

  // O paralax vai mover a imagem de 0% até -20% no eixo Y
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Free Consultation",
      description: "We measure your space and carefully listen to your vision and needs for the project.",
    },
    {
      icon: FileText,
      number: "02",
      title: "No-Surprise Quote",
      description: "Transparent pricing with absolutely no hidden fees. You know exactly what you'll pay.",
    },
    {
      icon: HardHat,
      number: "03",
      title: "Expert Installation",
      description: "Clean, professional execution by our specialized local crew respecting your home.",
    },
    {
      icon: CheckCircle2,
      number: "04",
      title: "Final Walkthrough",
      description: "We review the completed work together. 100% satisfaction guaranteed before we leave.",
    },
  ];

  return (
    <section ref={sectionRef} className="relative section-padding overflow-hidden bg-slate-950">
      
      {/* ======================================================== */}
      {/* BACKGROUND PARALLAX DINÂMICO CORRIGIDO */}
      {/* ======================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          style={{ 
            y, // Efeito de Movimento (Paralax)
            backgroundImage: `url(${bgPattern})` // Inserção Direta da Imagem
          }} 
          // h-[130%] garante que a imagem é maior que a secção para poder "deslizar" sem mostrar fundo vazio
          className="absolute top-0 left-0 w-full h-[130%] z-0 bg-cover bg-center opacity-30 mix-blend-overlay"
          aria-hidden="true"
        />
        
        {/* Camada de Gradiente */}
        <div 
          className="absolute inset-0 z-10 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-20 container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider bg-accent/10 px-4 py-1.5 rounded-full inline-block mb-4 border border-accent/20">
            Our Process
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4 leading-tight">
            How We <span className="text-accent">Work</span>
          </h2>
          <p className="text-slate-200 text-lg">
            A simple and transparent process from start to finish.
          </p>
        </motion.div>

        {/* CONNECT THE DOTS LAYOUT */}
        <div className="relative max-w-5xl mx-auto z-20">
          
          {/* LINHAS CONECTORAS */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-accent/10 via-accent/50 to-accent/10 z-0" />
          <div className="lg:hidden absolute top-[4rem] bottom-[4rem] left-[2.25rem] w-0.5 bg-gradient-to-b from-accent/10 via-accent/50 to-accent/10 z-0" />

          {/* GRID DOS PASSOS */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex flex-row lg:flex-col items-start lg:items-center group"
              >
                {/* ÍCONE / BOLINHA DE CONEXÃO */}
                <div className="relative shrink-0 flex items-center justify-center lg:mb-8 ml-2 lg:ml-0 z-20">
                  <div className="absolute inset-0 bg-accent/10 rounded-full scale-110 transition-transform duration-500 group-hover:scale-150" />
                  
                  <div className="relative w-16 h-16 lg:w-20 lg:h-20 bg-slate-900 border-2 border-slate-700 rounded-full flex items-center justify-center shadow-xl transition-colors duration-300 group-hover:border-accent">
                    <span className="font-display text-xl lg:text-2xl font-bold text-slate-300 group-hover:text-white transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <div className="absolute -top-1 -right-1 lg:top-0 lg:right-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                    <step.icon className="w-4 h-4 text-accent-foreground" />
                  </div>
                </div>

                {/* TEXTO DO PASSO */}
                <div className="ml-6 lg:ml-0 lg:text-center pt-2 lg:pt-0">
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
