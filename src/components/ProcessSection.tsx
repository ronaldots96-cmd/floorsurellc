import { motion } from "framer-motion";
import { MessageSquare, FileText, HardHat, CheckCircle2 } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Consultation",
      description:
        "Contact us to discuss your needs and schedule a free on-site evaluation.",
    },
    {
      icon: FileText,
      number: "02",
      title: "Quote",
      description:
        "We assess your space and prepare a detailed, transparent quote with no surprises.",
    },
    {
      icon: HardHat,
      number: "03",
      title: "Installation",
      description:
        "Our professional team performs the installation with precision, cleanliness, and on schedule.",
    },
    {
      icon: CheckCircle2,
      number: "04",
      title: "Final Inspection",
      description:
        "We conduct a complete inspection together to ensure your total satisfaction with the result.",
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
            Our Process
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            How We <span className="text-primary">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A simple and transparent process from start to finish.
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
