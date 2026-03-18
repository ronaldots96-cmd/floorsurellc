import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Wrench, Smile, Palette, DollarSign, ShieldCheck } from "lucide-react";

// Importando a mesma imagem de fundo
import bgPattern from "@/assets/herringbone-wood-flooring-texture.jpg";

const WhyChooseUsSection = () => {
  const sectionRef = useRef(null);

  // Configuração do Parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], 
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const reasons = [
    {
      icon: Wrench,
      title: "Professional Installation",
      description:
        "Trained and experienced team to ensure perfect installations on every project.",
    },
    {
      icon: Smile,
      title: "Customer Satisfaction",
      description:
        "Our commitment is your satisfaction. We work until you're 100% happy.",
    },
    {
      icon: Palette,
      title: "Wide Range of Options",
      description:
        "Variety of materials, colors, and styles to match your taste and budget.",
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description:
        "We offer the best value in the market without compromising quality.",
    },
    {
      icon: ShieldCheck,
      title: "1-Year Warranty",
      description:
        "All our services include a 1-year warranty. Your peace of mind is our priority.",
    },
  ];

  return (
    <section ref={sectionRef} className="relative section-padding overflow-hidden bg-primary">
      
      {/* ======================================================== */}
      {/* BACKGROUND PARALLAX - MÁSCARA MARROM (50%) */}
      {/* ======================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-primary">
        <motion.div 
          style={{ y }} 
          className="absolute top-[-15%] left-0 w-full h-[130%] z-0"
        >
          <img 
            src={bgPattern} 
            alt="Wood Flooring Texture" 
            className="w-full h-full object-cover object-center" 
          />
        </motion.div>
        
        {/* Máscara sólida com a cor primária e 50% de opacidade */}
        <div 
          className="absolute inset-0 z-10 bg-primary/50 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>

      {/* Conteúdo da seção deve ficar acima do background (z-20) */}
      <div className="relative z-20 container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider bg-primary-foreground/10 px-4 py-1.5 rounded-full inline-block mb-4 border border-primary-foreground/20 shadow-sm backdrop-blur-sm">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-2 mb-4 drop-shadow-md">
            Excellence in Every <span className="text-accent">Detail</span>
          </h2>
          <p className="text-primary-foreground/90 text-lg drop-shadow-md font-medium">
            Discover why we're the preferred choice for flooring installation in Florida.
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
              className="bg-primary-foreground/10 backdrop-blur-md p-6 rounded-xl text-center border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300 shadow-xl"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent mb-4 shadow-lg">
                <reason.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold text-primary-foreground mb-2 drop-shadow-sm">
                {reason.title}
              </h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed font-medium">
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
