import { motion } from "framer-motion";
import { Wrench, Smile, Palette, DollarSign, ShieldCheck } from "lucide-react";

const WhyChooseUsSection = () => {
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
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-2 mb-4">
            Excellence in Every <span className="text-accent">Detail</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg">
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
