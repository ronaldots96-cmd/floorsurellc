import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "#home", label: "Início" },
    { href: "#about", label: "Sobre Nós" },
    { href: "#services", label: "Serviços" },
    { href: "#gallery", label: "Galeria" },
    { href: "#testimonials", label: "Depoimentos" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <footer id="contact" className="bg-charcoal">
      {/* Main Footer Content */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Appointment Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Contato
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-warm-white mt-2 mb-4">
                Agende sua <span className="text-accent">Avaliação Gratuita</span>
              </h2>
              <p className="text-warm-white/70 mb-8">
                Preencha o formulário e nossa equipe entrará em contato em até 24 horas.
              </p>

              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nome Completo *"
                    className="w-full px-4 py-3 bg-warm-white/10 border border-warm-white/20 rounded-lg text-warm-white placeholder:text-warm-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Telefone *"
                    className="w-full px-4 py-3 bg-warm-white/10 border border-warm-white/20 rounded-lg text-warm-white placeholder:text-warm-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50"
                    required
                  />
                </div>
                <input
                  type="email"
                  placeholder="E-mail *"
                  className="w-full px-4 py-3 bg-warm-white/10 border border-warm-white/20 rounded-lg text-warm-white placeholder:text-warm-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50"
                  required
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <select className="w-full px-4 py-3 bg-warm-white/10 border border-warm-white/20 rounded-lg text-warm-white/70 focus:outline-none focus:ring-2 focus:ring-accent/50">
                    <option value="">Tipo de Serviço</option>
                    <option value="hardwood">Piso de Madeira</option>
                    <option value="vinyl">Piso Vinílico</option>
                    <option value="laminate">Piso Laminado</option>
                    <option value="stairs">Escadas</option>
                    <option value="repair">Reparos</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Cidade / Região"
                    className="w-full px-4 py-3 bg-warm-white/10 border border-warm-white/20 rounded-lg text-warm-white placeholder:text-warm-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                </div>
                <textarea
                  placeholder="Descreva seu projeto..."
                  rows={4}
                  className="w-full px-4 py-3 bg-warm-white/10 border border-warm-white/20 rounded-lg text-warm-white placeholder:text-warm-white/50 focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                />
                <Button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent text-lg py-6"
                >
                  Solicitar Avaliação Gratuita
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </motion.div>

            {/* Right - Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:pl-12"
            >
              {/* Logo */}
              <div className="mb-8">
                <h3 className="font-display text-3xl font-bold text-warm-white">
                  FloorSure
                </h3>
                <span className="text-sm tracking-widest text-warm-white/60 uppercase">
                  Flooring LLC
                </span>
              </div>

              <p className="text-warm-white/70 mb-8 leading-relaxed">
                Especialistas em instalação e reparo de pisos na Flórida Central e Norte. 
                Qualidade incomparável com 1 ano de garantia em todos os serviços.
              </p>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                <a
                  href="tel:+18624480588"
                  className="flex items-center gap-4 text-warm-white hover:text-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-warm-white/60">Telefone</p>
                    <p className="font-semibold">(862) 448-0588</p>
                  </div>
                </a>

                <a
                  href="mailto:floorsurellc@outlook.com"
                  className="flex items-center gap-4 text-warm-white hover:text-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-warm-white/60">E-mail</p>
                    <p className="font-semibold">floorsurellc@outlook.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-warm-white">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-warm-white/60">Área de Atendimento</p>
                    <p className="font-semibold">Flórida Central e Norte</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-warm-white font-semibold mb-4">Links Rápidos</h4>
                <div className="grid grid-cols-2 gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-warm-white/60 hover:text-accent transition-colors text-sm py-1"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-warm-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-warm-white/50 text-sm text-center md:text-left">
            © {currentYear} FloorSure Flooring LLC. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-warm-white/50 hover:text-accent text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-warm-white/50 hover:text-accent text-sm transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
