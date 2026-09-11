import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/5561998162830?text=" +
  encodeURIComponent("Olá! Gostaria de um orçamento para o meu site.");

const links = [
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "Como funciona", href: "#processo" },
  { label: "Planos", href: "#planos" },
  { label: "Dúvidas", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img
            src="https://cdn.lugc.link/b4ab0ab1-58b5-4a50-acaf-6519cd752c39/-/preview/65x65/-/format/auto/"
            alt="King's"
            className="w-9 h-9 object-contain"
          />
          <span className="font-display text-xl font-bold text-gradient-gold">
            King's
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button
          asChild
          size="sm"
          className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4" />
            Falar conosco
          </a>
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
