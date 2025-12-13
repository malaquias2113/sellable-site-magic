import { Palette, Smartphone, Server, Target } from "lucide-react";

const benefits = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Design que atrai",
    description: "Um visual profissional gera confiança e vendas.",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Funcionar em qualquer dispositivo",
    description: "Bonito e fácil de usar em celulares, tablets e computadores.",
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Hospedagem de qualidade",
    description: "Seu site sempre no ar e rápido.",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Planejamento estratégico",
    description: "Cada detalhe pensado para vender.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            O que faz um site <span className="text-gradient-gold">vender</span>
          </h2>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={benefit.title}
              {...benefit}
              delay={`${0.1 + index * 0.1}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const BenefitCard = ({ icon, title, description, delay }: BenefitCardProps) => (
  <div
    className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:bg-surface-elevated hover:-translate-y-1 opacity-0 animate-fade-in"
    style={{ animationDelay: delay }}
  >
    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

export default BenefitsSection;
