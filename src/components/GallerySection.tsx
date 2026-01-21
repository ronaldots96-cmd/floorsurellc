import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const projects = [
    {
      before: before1,
      after: after1,
      title: "Hardwood Floor Restoration",
      location: "Orlando, FL",
    },
    {
      before: before2,
      after: after2,
      title: "Carpet to Vinyl Replacement",
      location: "Tampa, FL",
    },
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setSliderPosition(50);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setSliderPosition(50);
  };

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Gallery
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Before & <span className="text-primary">After</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            See the transformation our work can make in your home.
          </p>
        </motion.div>

        {/* Before/After Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-card rounded-2xl overflow-hidden shadow-lg">
            {/* Project Info */}
            <div className="absolute top-4 left-4 z-20 bg-charcoal/80 backdrop-blur-sm px-4 py-2 rounded-lg">
              <h3 className="font-display text-lg font-bold text-warm-white">
                {projects[currentIndex].title}
              </h3>
              <p className="text-warm-white/70 text-sm">
                {projects[currentIndex].location}
              </p>
            </div>

            {/* Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden">
              {/* After Image (Bottom Layer) */}
              <img
                src={projects[currentIndex].after}
                alt="After"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Before Image (Top Layer with clip) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={projects[currentIndex].before}
                  alt="Before"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-accent cursor-ew-resize z-10"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-accent">
                  <ChevronLeft className="w-4 h-4 text-accent-foreground" />
                  <ChevronRight className="w-4 h-4 text-accent-foreground" />
                </div>
              </div>

              {/* Slider Input */}
              <input
                type="range"
                min="5"
                max="95"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
              />

              {/* Labels */}
              <div className="absolute bottom-4 left-4 bg-charcoal/80 backdrop-blur-sm px-3 py-1 rounded-md text-warm-white text-sm font-medium">
                Before
              </div>
              <div className="absolute bottom-4 right-4 bg-accent/90 backdrop-blur-sm px-3 py-1 rounded-md text-accent-foreground text-sm font-medium">
                After
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between p-4 border-t border-border">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevProject}
                className="hover:bg-accent/10"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <div className="flex gap-2">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setSliderPosition(50);
                    }}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      idx === currentIndex ? "bg-accent" : "bg-border"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextProject}
                className="hover:bg-accent/10"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
