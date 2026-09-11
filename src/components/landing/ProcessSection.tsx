import { MessagesSquare, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: <MessagesSquare className="w-6 h-6" />,
    title: "1. Conversa inicial",
    description:
      "Entendemos o seu negócio, o seu público e o objetivo do site. Sem compromisso.",
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "2. Proposta e design",
    description:
      "Você recebe o escopo, o prazo e o valor por escrito antes de qualquer pagamento.",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "3. Desenvolvimento",
    description:
      "Acompanhamento durante toda a produção, com espaço para os seus ajustes.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "4. Entrega e suporte",
    description:
      "Site no ar, tutorial de edição gravado e 30 dias de suporte gratuito.",
  },
];

const ProcessSection = () => {
  return (
    <section id="processo" className="py-24 bg-background scroll-mt-16">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-primary uppercase tracking-widest text-sm font-medium mb-4">
            Como funciona
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Do primeiro contato ao{" "}
            <span className="text-gradient-gold">site no ar</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Um processo transparente, com prazos e valores definidos desde o início.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative p-7 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-5">
                {step.icon}
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
