import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "5561998162830";
const getWhatsAppLink = (planName: string) => 
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Tenho interesse no plano ${planName}.`)}`;

const plans = [
  {
    name: "Essencial",
    highlight: "Criação do Design",
    delivery: "Pronto em 10 dias",
    features: [
      { name: "Criação do Design", included: true },
      { name: "Implementação WordPress", included: false },
      { name: "Responsividade", included: false },
      { name: "Otimização de Velocidade", included: false },
      { name: "Criação da Copy", included: false },
      { name: "Tráfego Pago", included: false },
    ],
    featured: false,
  },
  {
    name: "Completo",
    highlight: "Tudo do Plano Essencial",
    delivery: "Pronto em 15 dias",
    features: [
      { name: "Criação do Design", included: true },
      { name: "Implementação WordPress", included: true },
      { name: "Responsividade", included: true },
      { name: "Otimização de Velocidade", included: true },
      { name: "Criação da Copy", included: false },
      { name: "Tráfego Pago", included: false },
    ],
    featured: true,
  },
  {
    name: "Turbinado",
    highlight: "Tudo do Plano Completo",
    delivery: "Pronto em 30 dias",
    features: [
      { name: "Criação do Design", included: true },
      { name: "Implementação WordPress", included: true },
      { name: "Responsividade", included: true },
      { name: "Otimização de Velocidade", included: true },
      { name: "Criação da Copy", included: true },
      { name: "Tráfego Pago", included: true },
    ],
    featured: false,
  },
];

const PricingSection = () => {
  return (
    <section id="planos" className="py-24 bg-gradient-dark scroll-mt-16">
      <div className="container px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary uppercase tracking-widest text-sm font-medium mb-4">
            Planos Disponíveis
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Um investimento que traz <span className="text-gradient-gold">resultados</span>
          </h2>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              {...plan}
              delay={`${0.1 + index * 0.15}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface PricingCardProps {
  name: string;
  highlight: string;
  delivery: string;
  features: { name: string; included: boolean }[];
  featured: boolean;
  delay: string;
}

const PricingCard = ({
  name,
  highlight,
  delivery,
  features,
  featured,
  delay,
}: PricingCardProps) => (
  <div
    className={cn(
      "relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 opacity-0 animate-fade-in",
      featured
        ? "bg-card border-primary/50 shadow-xl shadow-primary/10 scale-105 z-10"
        : "bg-card border-border hover:border-primary/30"
    )}
    style={{ animationDelay: delay }}
  >
    {featured && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider">
          Recomendado
        </span>
      </div>
    )}

    <div className="text-center mb-8">
      <h3 className={cn(
        "text-2xl font-bold mb-2",
        featured ? "text-primary" : "text-foreground"
      )}>
        {name}
      </h3>
      <p className="text-muted-foreground text-sm mb-1">{highlight}</p>
      <p className="text-primary font-medium">{delivery}</p>
    </div>

    <ul className="space-y-4 mb-8">
      {features.map((feature) => (
        <li key={feature.name} className="flex items-center gap-3">
          {feature.included ? (
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
              <Check className="w-3 h-3 text-primary" />
            </div>
          ) : (
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center">
              <X className="w-3 h-3 text-destructive/50" />
            </div>
          )}
          <span className={cn(
            "text-sm",
            feature.included ? "text-foreground" : "text-muted-foreground"
          )}>
            {feature.name}
          </span>
        </li>
      ))}
    </ul>

    <Button
      asChild
      className={cn(
        "w-full rounded-full transition-all duration-300",
        featured
          ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
          : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
      )}
    >
      <a href={getWhatsAppLink(name)} target="_blank" rel="noopener noreferrer">
        Quero este plano
      </a>
    </Button>
  </div>
);

export default PricingSection;
