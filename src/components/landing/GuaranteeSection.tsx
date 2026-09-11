import { ShieldCheck, FileText, Clock, Headphones } from "lucide-react";

const guarantees = [
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Contrato e escopo por escrito",
    description: "Você sabe exatamente o que será entregue antes de começar.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Prazo combinado, prazo cumprido",
    description: "Cronograma definido logo na proposta e acompanhado por você.",
  },
  {
    icon: <Headphones className="w-5 h-5" />,
    title: "30 dias de suporte incluso",
    description: "Ajustes e dúvidas atendidos sem custo após a entrega.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Site 100% seu",
    description: "Sem mensalidade obrigatória e com tutorial para editar textos.",
  },
];

const GuaranteeSection = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="opacity-0 animate-fade-in">
            <span className="inline-block text-primary uppercase tracking-widest text-sm font-medium mb-4">
              Confiança
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-5">
              Por que empresas escolhem a{" "}
              <span className="text-gradient-gold">King's</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Trabalhamos com clareza do começo ao fim: nada de surpresa no valor,
              no prazo ou no que está incluído. Cada projeto é acompanhado de perto
              por quem realmente vai construir o seu site.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {guarantees.map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
