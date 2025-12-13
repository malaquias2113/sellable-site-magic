const TestimonialsSection = () => {
  return (
    <section id="trabalhos" className="py-24 bg-gradient-dark">
      <div className="container px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary uppercase tracking-widest text-sm font-medium mb-4 opacity-0 animate-fade-in">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Clientes que Viram <span className="text-gradient-gold">Resultados</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <TestimonialCard
            imageSrc="https://cdn.lugc.link/4e05f74d-46c7-4c60-9b2c-db81a4a6db07/-/preview/298x337/-/format/auto/"
            delay="0.2s"
          />
          <TestimonialCard
            imageSrc="https://cdn.lugc.link/981350ba-de80-440f-aded-9a57c635e6e5/-/preview/228x337/-/format/auto/"
            delay="0.3s"
          />
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  imageSrc: string;
  delay: string;
}

const TestimonialCard = ({ imageSrc, delay }: TestimonialCardProps) => (
  <div
    className="group relative opacity-0 animate-fade-in"
    style={{ animationDelay: delay }}
  >
    {/* Outer gold frame */}
    <div className="absolute -inset-1 bg-gradient-to-br from-primary via-primary/50 to-primary/20 rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
    
    {/* Card container */}
    <div className="relative bg-card rounded-xl overflow-hidden border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-500 shadow-xl shadow-primary/10 group-hover:shadow-primary/20">
      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-lg" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-lg" />
      
      {/* Image container with padding */}
      <div className="p-3">
        <div className="aspect-[3/4] max-h-[400px] overflow-hidden rounded-lg">
          <img
            src={imageSrc}
            alt="Depoimento de cliente satisfeito"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
      
      {/* Bottom decorative bar */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </div>
  </div>
);

export default TestimonialsSection;
