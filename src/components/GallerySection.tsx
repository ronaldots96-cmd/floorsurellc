import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, LayoutGrid, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Imagens do Slider Antes/Depois
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
      title: "Carpet to Hardwood",
      location: "Orlando, FL",
    },
    {
      before: before2,
      after: after2,
      title: "Carpet to Vinyl",
      location: "Tampa, FL",
    },
  ];

  // Array para a Galeria Completa (Modal) - Já apontei para algumas fotos reais que você subiu!
  const fullGallery = [
    { type: "image", src: "/portfolio/hardwood/hardwood-1.jpg", alt: "Hardwood" },
    { type: "image", src: "/portfolio/vinyl/vinyl-2.jpg", alt: "Vinyl" },
    { type: "image", src: "/portfolio/refinish/refinish-3.jpg", alt: "Refinish" },
    { type: "image", src: "/portfolio/stairs/stairs-4.jpg", alt: "Stairs" },
    { type: "image", src: "/portfolio/hardwood/hardwood-5.jpg", alt: "Hardwood" },
    { type: "image", src: "/portfolio/vinyl/vinyl-6.jpg", alt: "Vinyl" },
    { type: "image", src: "/portfolio/refinish/refinish-1.jpg", alt: "Refinish" },
    { type: "image", src: "/portfolio/stairs/stairs-2.jpg", alt: "Stairs" },
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
    <section id="gallery" className="section-padding bg-slate-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Gallery
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-2 mb-4">
            Before & <span className="text-primary">After</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Slide to see the incredible transformations we bring to our clients' homes.
          </p>
        </motion.div>

        {/* Before/After Slider Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200">
            
            {/* INFORMAÇÃO DO PROJETO (CAIXA DE TEXTO AJUSTADA) */}
            {/* px-3 py-1.5 no mobile para ficar pequena, px-4 py-2 no desktop */}
            <div className="absolute top-3 left-3 md:top-5 md:left-5 z-20 bg-slate-900/85 backdrop-blur-md px-3 py-1.5 md:px-5 md:py-2.5 rounded-lg shadow-lg border border-white/10 max-w-[80%]">
              {/* whitespace-nowrap impede a quebra de linha em ecrãs pequenos */}
              <h3 className="font-display text-sm md:text-lg font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis">
                {projects[currentIndex].title}
              </h3>
              <p className="text-slate-300 text-xs md:text-sm font-medium">
                {projects[currentIndex].location}
              </p>
            </div>

            {/* CONTAINER DA IMAGEM (ALTURA AJUSTADA) */}
            {/* aspect-[4/5] = Retrato vertical no Mobile | md:aspect-[16/10] = Cinema no Desktop */}
            <div className="relative aspect-[4/5] md:aspect-[16/10] overflow-hidden group">
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

              {/* Slider Handle (A barra do meio) */}
              <div
                className="absolute top-0 bottom-0 w-1.5 bg-white cursor-ew-resize z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-accent rounded-full flex items-center justify-center shadow-lg border-4 border-white transition-transform group-hover:scale-110">
                  <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-white ml-0.5" />
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white mr-0.5" />
                </div>
              </div>

              {/* Input invisível para controlo tátil/rato */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
              />

              {/* Labels (Before / After) */}
              <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded text-white text-xs md:text-sm font-bold uppercase tracking-wider pointer-events-none">
                Before
              </div>
              <div className="absolute bottom-4 right-4 bg-accent backdrop-blur-sm px-3 py-1 rounded text-white text-xs md:text-sm font-bold uppercase tracking-wider pointer-events-none shadow-md">
                After
              </div>
            </div>

            {/* Navigation Bar (Debaixo da Imagem) */}
            <div className="flex items-center justify-between p-3 md:p-4 bg-white border-t border-slate-100">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevProject}
                className="hover:bg-accent/10 hover:text-accent rounded-full"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              {/* Dots de navegação */}
              <div className="flex gap-2.5">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setSliderPosition(50);
                    }}
                    className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? "bg-accent w-6 md:w-8" : "bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to project ${idx + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextProject}
                className="hover:bg-accent/10 hover:text-accent rounded-full"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* NOVO: CTA DE VER MAIS IMAGENS (MODAL DE GALERIA) */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-base md:text-lg px-8 h-14 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <LayoutGrid className="w-5 h-5 mr-2" />
                View Full Gallery
              </Button>
            </DialogTrigger>
            
            <DialogContent className="max-w-6xl bg-white p-0 overflow-hidden flex flex-col h-[95vh] md:h-auto md:max-h-[90vh]">
              <DialogHeader className="p-6 border-b border-slate-100 shrink-0">
                <DialogTitle className="font-display text-2xl md:text-3xl text-slate-900">
                  FloorSure <span className="text-primary">Portfolio</span>
                </DialogTitle>
                <DialogDescription className="text-slate-500 text-base">
                  A collection of our finest installations across Central Florida.
                </DialogDescription>
              </DialogHeader>
              
              {/* Grid Layout da Galeria Completa */}
              <div className="flex-grow overflow-y-auto overflow-x-hidden p-4 md:p-6 bg-slate-50/80">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {fullGallery.map((item, i) => (
                    <div 
                      key={i} 
                      className="relative rounded-xl overflow-hidden bg-white group/media shadow-sm border border-slate-200 h-fit"
                    >
                      {item.type === "video" ? (
                        <>
                          <video
                            controls
                            preload="none"
                            className="w-full h-auto aspect-video object-cover"
                          >
                            <source src={item.src} type="video/mp4" />
                          </video>
                          <PlayCircle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-white/80 pointer-events-none group-hover/media:opacity-0 transition-opacity" />
                        </>
                      ) : (
                        <img
                          src={item.src}
                          alt={item.alt}
                          loading="lazy"
                          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500 aspect-square sm:aspect-auto"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>

      </div>
    </section>
  );
};

export default GallerySection;
