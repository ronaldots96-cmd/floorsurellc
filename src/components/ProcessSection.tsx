import { motion } from "framer-motion";
import { MessageSquare, FileText, HardHat, CheckCircle2 } from "lucide-react";

const ProcessSection = () => {
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
    <section className="relative section-padding overflow-hidden bg-slate-950">
      
      {/* ======================================================== */}
      {/* NOVO FUNDO DE IMAGEM PARALLAX (Heringbone) COM SOBREPOSIÇÃO ESCURA */}
      {/* ======================================================== */}
      <div className="absolute inset-0 z-0">
        {/* A imagem original com opacidade reduzida para que a textura seja subtil */}
        <div 
          className="absolute inset-0 bg-[url('/assets/herringbone-wood-flooring-texture.jpg')] bg-cover bg-fixed bg-center opacity-30 mix-blend-overlay"
          aria-hidden="true"
        />
        
        {/* Camada de Gradiente Pesado: Escurece as bordas e garante contraste no centro para o texto */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 container-custom">
        {/* Header - Mantido o contraste branco */}
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

        {/* CONNECT THE DOTS LAYOUT - Mantido das versões anteriores */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* LINHA CONECTORA (Desktop) */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-accent/10 via-accent/50 to-accent/10 z-0" />
          
          {/* LINHA CONECTORA (Mobile) */}
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
                  {/* Efeito de auréola dourada suave no hover */}
                  <div className="absolute inset-0 bg-accent/10 rounded-full scale-110 transition-transform duration-500 group-hover:scale-150" />
                  
                  {/* Círculo Principal com o Número - Mantido escuro */}
                  <div className="relative w-16 h-16 lg:w-20 lg:h-20 bg-slate-900 border-2 border-slate-700 rounded-full flex items-center justify-center shadow-xl transition-colors duration-300 group-hover:border-accent">
                    <span className="font-display text-xl lg:text-2xl font-bold text-slate-300 group-hover:text-white transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Pequeno Badge Dourado */}
                  <div className="absolute -top-1 -right-1 lg:top-0 lg:right-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                    <step.icon className="w-4 h-4 text-accent-foreground" />
                  </div>
                </div>

                {/* TEXTO DO PASSO - Atualizado para cores mais claras */}
                <div className="ml-6 lg:ml-0 lg:text-center pt-2 lg:pt-0">
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  {/* text-slate-300 oferece ótimo contraste num fundo de textura escura */}
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
