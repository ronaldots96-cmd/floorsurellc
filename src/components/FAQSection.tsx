import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How long does a typical flooring installation take?",
      answer: "Most of our residential installations (like Vinyl or Laminate) are completed within 1 to 3 days. Hardwood installation or refinishing may take a bit longer (3-5 days) depending on the size of the project and the necessary acclimatization period for the wood."
    },
    {
      question: "Do I need to move my own furniture?",
      answer: "We want to make this process as stress-free as possible. We offer furniture moving as part of our service. During your free consultation, simply point out the heavy items, and we will include the safe moving and replacing of your furniture in your transparent quote."
    },
    {
      question: "Will there be a lot of dust during hardwood refinishing?",
      answer: "Not with FloorSure! We use state-of-the-art dustless sanding equipment that captures up to 99% of the dust before it ever becomes airborne. You won't have to worry about plastic sheets everywhere or finding dust in your vents for months."
    },
    {
      question: "What is the best flooring for homes with dogs or kids?",
      answer: "We highly recommend Luxury Vinyl Plank (LVP). It is completely waterproof, highly scratch-resistant, and very easy to clean. It gives you the beautiful, warm look of real wood without the constant worry of spills or deep scratches."
    },
    {
      question: "Do you provide warranties for your work?",
      answer: "Absolutely. We stand firmly behind our craftsmanship with a comprehensive 1-year labor warranty. Additionally, all the premium materials we install come with their own extensive manufacturer warranties, some lasting up to a lifetime."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Título e CTA secundário */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-24"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full">
              Got Questions?
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6 leading-tight">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              We believe in total transparency. Here are the answers to the most common questions we get from homeowners across Central Florida.
            </p>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-display font-bold text-slate-900 mb-2">Still have a question?</h4>
              <p className="text-slate-600 text-sm mb-4">
                Our flooring experts are ready to help you make the best decision for your home.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center font-semibold text-primary hover:text-accent transition-colors"
              >
                Contact us directly &rarr;
              </a>
            </div>
          </motion.div>

          {/* Right Column: O Accordion (A Sanfona) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white border border-slate-200 rounded-xl px-6 py-2 shadow-sm data-[state=open]:border-accent/50 data-[state=open]:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="font-display font-semibold text-left text-slate-800 hover:text-primary hover:no-underline text-lg py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-4 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
