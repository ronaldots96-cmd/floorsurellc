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
      text: "Excellent work! The team was super professional and the result was amazing. My hardwood floor turned out perfect. Highly recommend!",
      source: "Google",
    },
    {
      name: "John Smith",
      location: "Tampa, FL",
      rating: 5,
      text: "Top-quality service! They installed vinyl flooring in my bathroom and kitchen. Impeccable work and finished on time as promised.",
      source: "Facebook",
    },
    {
      name: "Ana Costa",
      location: "Jacksonville, FL",
      rating: 5,
      text: "Loved the service from the first contact. Fair price, quality materials, and perfect installation. The 1-year warranty gave me great confidence.",
      source: "Yelp",
    },
    {
      name: "Carlos Oliveira",
      location: "Gainesville, FL",
      rating: 5,
      text: "They completely transformed my home's staircase. It looks beautiful! Serious professionals committed to quality.",
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
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            What Our <span className="text-primary">Customers</span> Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Our customers' satisfaction is our greatest pride.
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
