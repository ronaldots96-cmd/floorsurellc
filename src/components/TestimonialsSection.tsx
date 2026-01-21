import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Maria Santos",
      location: "Orlando, FL",
      rating: 5,
      text: "Excelente trabalho! A equipe foi super profissional e o resultado ficou incrível. Meu piso de madeira ficou perfeito. Recomendo a todos!",
      source: "Google",
    },
    {
      name: "João Silva",
      location: "Tampa, FL",
      rating: 5,
      text: "Serviço de primeira qualidade! Instalaram o piso vinílico no meu banheiro e cozinha. Trabalho impecável e dentro do prazo prometido.",
      source: "Facebook",
    },
    {
      name: "Ana Costa",
      location: "Jacksonville, FL",
      rating: 5,
      text: "Adorei o atendimento desde o primeiro contato. Preço justo, material de qualidade e instalação perfeita. A garantia de 1 ano me deu muita confiança.",
      source: "Yelp",
    },
    {
      name: "Carlos Oliveira",
      location: "Gainesville, FL",
      rating: 5,
      text: "Transformaram completamente a escada da minha casa. Ficou linda! Profissionais sérios e comprometidos com a qualidade.",
      source: "Google",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            O Que Nossos <span className="text-primary">Clientes</span> Dizem
          </h2>
          <p className="text-muted-foreground text-lg">
            A satisfação dos nossos clientes é nosso maior orgulho.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-background rounded-2xl shadow-lg p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 md:top-8 md:right-8">
              <Quote className="w-12 h-12 text-accent/20" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-medium">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div>
                  <p className="font-display text-xl font-bold text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].location}
                  </p>
                  <span className="inline-block mt-2 px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium">
                    via {testimonials[currentIndex].source}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="hover:bg-accent/10"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      idx === currentIndex ? "bg-accent" : "bg-border"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="hover:bg-accent/10"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
