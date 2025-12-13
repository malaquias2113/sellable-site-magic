import { ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    name: "Restaurante Sabor & Arte",
    category: "Gastronomia",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    description: "Site completo com cardápio digital e reservas online",
  },
  {
    name: "Clínica Bem Estar",
    category: "Saúde",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop",
    description: "Landing page com agendamento de consultas",
  },
  {
    name: "Auto Center Premium",
    category: "Automotivo",
    image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=600&h=400&fit=crop",
    description: "Site institucional com catálogo de serviços",
  },
  {
    name: "Escritório Advocacia Lima",
    category: "Jurídico",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
    description: "Site profissional com área do cliente",
  },
  {
    name: "Salão Belle Femme",
    category: "Beleza",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop",
    description: "Site elegante com galeria e agendamento",
  },
  {
    name: "Construtora Horizonte",
    category: "Construção",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
    description: "Site institucional com portfólio de obras",
  },
];

const PortfolioSection = () => {
  return (
    <section id="trabalhos" className="py-24 bg-surface scroll-mt-20">
      <div className="container px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary uppercase tracking-widest text-sm font-medium mb-4 opacity-0 animate-fade-in">
            Portfólio
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Nossos <span className="text-gradient-gold">Trabalhos</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Conheça alguns dos sites que desenvolvemos para empresas de diversos segmentos
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={item.name}
              {...item}
              delay={`${0.2 + index * 0.1}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface PortfolioCardProps {
  name: string;
  category: string;
  image: string;
  description: string;
  delay: string;
}

const PortfolioCard = ({ name, category, image, description, delay }: PortfolioCardProps) => (
  <div
    className="group relative opacity-0 animate-fade-in"
    style={{ animationDelay: delay }}
  >
    {/* Glow effect */}
    <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/50 to-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
    
    {/* Card */}
    <div className="relative bg-card rounded-xl overflow-hidden border border-border group-hover:border-primary/40 transition-all duration-500">
      {/* Image container */}
      <div className="aspect-[3/2] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Hover icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500">
            <ExternalLink className="w-5 h-5 text-primary-foreground" />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <span className="text-primary text-xs uppercase tracking-wider font-medium">
          {category}
        </span>
        <h3 className="font-display text-lg font-semibold mt-1 group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm mt-2">
          {description}
        </p>
      </div>
      
      {/* Bottom accent */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  </div>
);

export default PortfolioSection;
