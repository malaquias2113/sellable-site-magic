import { Instagram, MessageCircle, Mail } from "lucide-react";
import WorkWithUsSheet from "./WorkWithUsSheet";

const WHATSAPP_LINK = "https://wa.me/5561998162830";

const Footer = () => {
  return (
    <footer className="pt-16 pb-10 bg-background border-t border-border">
      <div className="container px-4">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://cdn.lugc.link/b4ab0ab1-58b5-4a50-acaf-6519cd752c39/-/preview/65x65/-/format/auto/"
                alt="King's Logo"
                className="w-11 h-11 object-contain"
              />
              <span className="font-display text-2xl font-bold text-gradient-gold">
                King's
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Criação de sites profissionais para empresas que querem ser
              encontradas e vender todos os dias.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Nossos trabalhos", href: "#trabalhos" },
                { label: "Como funciona", href: "#processo" },
                { label: "Planos", href: "#planos" },
                { label: "Perguntas frequentes", href: "#faq" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Work with us */}
          <div>
            <h3 className="font-semibold mb-4">Carreira</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <WorkWithUsSheet />
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  (61) 99816-2830
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/kingss_techgroup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  @kingss_techgroup
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                Atendimento de seg. a sex., 9h às 18h
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} King's. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
