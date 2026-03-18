import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      location: "Winter Garden, FL",
      service: "Hardwood Installation",
      text: "Absolutely thrilled with our new floors! The FloorSure team was punctual, respectful of our home, and the craftsmanship is simply flawless. They completely transformed our living room.",
      rating: 5,
    },
    {
      name: "Michael & Elena T.",
      location: "Orlando, FL",
      service: "Stairs & Refinishing",
      text: "I was worried about the dust from sanding our old floors, but their dustless system is legit. The crew was super clean, and our 20-year-old oak stairs look brand new again. Highly recommend!",
      rating: 5,
    },
    {
      name: "David R.",
      location: "Windermere, FL",
      service: "Vinyl (LVP) Replacement",
      text: "Fast, professional, and exactly as quoted. No hidden fees or surprises at the end. The waterproof vinyl is perfect for our dogs, and the installation was finished a day ahead of schedule.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-slate-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-2 mb-4">
            Loved by <span className="text-primary">Homeowners</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Don't just take our word for it. See what your neighbors in Central Florida are saying about our work.
          </p>
        </motion.div>

        {/* Grid de Testemunhos */}
        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* Ícone de Citação em Marca de Água */}
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-slate-50 opacity-50 rotate-12 pointer-events-none" />

              {/* Estrelas */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Texto do Testemunho */}
              <p className="text-slate-700 leading-relaxed mb-8 relative z-10 flex-grow italic">
                "{testimonial.text}"
              </p>

              {/* Informação do Cliente */}
              <div className="mt-auto relative z-10">
                <div className="h-px w-12 bg-accent/30 mb-4" />
                <h4 className="font-display font-bold text-slate-900 text-lg">
                  {testimonial.name}
                </h4>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-sm text-slate-500">{testimonial.location}</span>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-md">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botão para Google Reviews (Opcional, mas dá muita autoridade) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-semibold rounded-full px-6"
          >
            {/* O ícone do Google pode ser adicionado depois se preferir, usei um texto direto por agora */}
            Read more reviews on Google
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
