import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/5561998162830?text=" +
  encodeURIComponent("Olá! Gostaria de conversar sobre a criação do meu site.");

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-dark">
      <div className="container px-4">
        <div className="relative max-w-4xl mx-auto text-center p-10 md:p-16 rounded-3xl bg-card border border-primary/30 glow-gold overflow-hidden opacity-0 animate-fade-in">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Vamos criar o site da sua{" "}
              <span className="text-gradient-gold">empresa</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Converse com a nossa equipe pelo WhatsApp e receba um orçamento
              gratuito, com prazo e escopo definidos.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Pedir orçamento gratuito
              </a>
            </Button>
            <p className="text-muted-foreground text-sm mt-5">
              Resposta em até 24 horas · Sem compromisso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
