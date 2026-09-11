const stats = [
  { value: "+50", label: "Projetos entregues" },
  { value: "10 dias", label: "Prazo médio de entrega" },
  { value: "30 dias", label: "Suporte gratuito incluso" },
  { value: "100%", label: "Clientes atendidos no prazo" },
];

const StatsSection = () => {
  return (
    <section className="py-14 bg-surface border-y border-border">
      <div className="container px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient-gold">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
