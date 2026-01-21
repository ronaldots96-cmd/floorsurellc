import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What types of flooring do you install?",
      answer:
        "We install all major types of flooring: solid hardwood, engineered wood, vinyl flooring (LVP), laminate flooring, and we also do wood stair installation and repair.",
    },
    {
      question: "How long does a typical installation take?",
      answer:
        "The time varies based on space size and flooring type. On average, a standard living room can be completed in 1-2 days. We provide a precise estimate after the free evaluation.",
    },
    {
      question: "Is the evaluation and quote free?",
      answer:
        "Yes! We offer completely free evaluations and quotes with no obligation. Contact us to schedule a site visit.",
    },
    {
      question: "What is the warranty on your services?",
      answer:
        "All our installation services come with a full 1-year warranty. This covers any installation defects and workmanship issues.",
    },
    {
      question: "Which areas of Florida do you serve?",
      answer:
        "We serve all of Central and North Florida, including Orlando, Tampa, Jacksonville, Gainesville, and surrounding cities. Contact us to confirm service in your area.",
    },
    {
      question: "Do I need to move the furniture before installation?",
      answer:
        "We recommend that smaller furniture be removed beforehand. For larger furniture, our team can assist with moving as part of the service, by prior arrangement.",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - FAQ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-8">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="border border-border rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left bg-card hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-medium text-foreground pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="p-5 pt-0 text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - AI Assistant Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:sticky lg:top-32"
          >
            <div className="bg-primary p-8 rounded-2xl text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent mb-6 animate-pulse">
                <MessageCircle className="w-10 h-10 text-accent-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
                Need Help?
              </h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Our virtual assistant is available 24/7 to answer your questions 
                about flooring, quotes, and scheduling.
              </p>
              <p className="text-sm text-primary-foreground/60 mb-6">
                Click the chat icon in the bottom right corner to start a conversation.
              </p>
              <div className="flex items-center justify-center gap-2 text-accent font-semibold">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Assistant Online
              </div>
            </div>

            {/* Quick Contact */}
            <div className="mt-6 p-6 bg-card rounded-xl border border-border">
              <h4 className="font-display text-lg font-bold text-foreground mb-4">
                Or contact us directly:
              </h4>
              <a
                href="tel:+18624480588"
                className="flex items-center gap-3 text-accent font-semibold text-lg hover:underline"
              >
                📞 (862) 448-0588
              </a>
              <a
                href="mailto:floorsurellc@outlook.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors mt-2"
              >
                ✉️ floorsurellc@outlook.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
