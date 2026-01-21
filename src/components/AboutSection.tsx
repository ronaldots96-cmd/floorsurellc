import { motion } from "framer-motion";
import { Shield, Award, Users, Clock } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Clock, value: "10+", label: "Years of Experience" },
    { icon: Users, value: "500+", label: "Happy Customers" },
    { icon: Award, value: "1 Year", label: "Warranty" },
    { icon: Shield, value: "100%", label: "Quality Guaranteed" },
  ];

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Transforming Spaces with{" "}
              <span className="text-primary">Excellence</span> and Dedication
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              <strong className="text-foreground">FloorSure Flooring LLC</strong> was born from a 
              passion for transforming environments through high-quality flooring. Based in Central 
              Florida, we serve the entire region with professionalism and commitment.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our mission is to provide flooring solutions that combine beauty, durability, and 
              value. Every project is treated with personalized care, ensuring results that 
              exceed expectations.
            </p>

            <div className="bg-primary/10 p-6 rounded-xl border-l-4 border-accent">
              <p className="text-foreground font-medium text-lg">
                "We offer a <span className="text-accent font-bold">1-year warranty</span> on 
                all our installation services — our promise of quality to you."
              </p>
            </div>
          </motion.div>

          {/* Right - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-background p-6 rounded-xl shadow-md text-center card-hover"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                  <stat.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
