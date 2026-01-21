import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quais tipos de pisos vocês instalam?",
      answer:
        "Instalamos todos os tipos principais de pisos: madeira maciça, madeira engenheirada, piso vinílico (LVP), piso laminado, e realizamos também instalação e reparo de escadas de madeira.",
    },
    {
      question: "Quanto tempo leva uma instalação típica?",
      answer:
        "O tempo varia de acordo com o tamanho do espaço e tipo de piso. Em média, uma sala de estar padrão pode ser concluída em 1-2 dias. Fornecemos uma estimativa precisa após a avaliação gratuita.",
    },
    {
      question: "A avaliação e orçamento são gratuitos?",
      answer:
        "Sim! Oferecemos avaliação e orçamento totalmente gratuitos e sem compromisso. Entre em contato para agendar uma visita técnica.",
    },
    {
      question: "Qual é a garantia dos serviços?",
      answer:
        "Todos os nossos serviços de instalação vêm com 1 ano de garantia completa. Isso cobre quaisquer defeitos de instalação e mão de obra.",
    },
    {
      question: "Vocês atendem quais regiões da Flórida?",
      answer:
        "Atendemos toda a Flórida Central e Norte, incluindo Orlando, Tampa, Jacksonville, Gainesville e cidades vizinhas. Entre em contato para confirmar atendimento na sua área.",
    },
    {
      question: "Preciso remover os móveis antes da instalação?",
      answer:
        "Recomendamos que móveis menores sejam removidos. Para móveis maiores, nossa equipe pode auxiliar na movimentação como parte do serviço, mediante acordo prévio.",
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
              Perguntas <span className="text-primary">Frequentes</span>
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
                Precisa de Ajuda?
              </h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Nosso assistente virtual está disponível 24/7 para responder suas dúvidas 
                sobre pisos, orçamentos e agendamentos.
              </p>
              <p className="text-sm text-primary-foreground/60 mb-6">
                Clique no ícone de chat no canto inferior direito para iniciar uma conversa.
              </p>
              <div className="flex items-center justify-center gap-2 text-accent font-semibold">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Assistente Online
              </div>
            </div>

            {/* Quick Contact */}
            <div className="mt-6 p-6 bg-card rounded-xl border border-border">
              <h4 className="font-display text-lg font-bold text-foreground mb-4">
                Ou fale diretamente conosco:
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
