const TestimonialsSection = () => {
  return (
    <section id="trabalhos" className="py-24 bg-gradient-dark">
      <div className="container px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary uppercase tracking-widest text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Clientes que Viram <span className="text-gradient-gold">Resultados</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <TestimonialCard
            imageSrc="https://cdn.lugc.link/4e05f74d-46c7-4c60-9b2c-db81a4a6db07/-/preview/298x337/-/format/auto/"
            delay="0.1s"
          />
          <TestimonialCard
            imageSrc="https://cdn.lugc.link/981350ba-de80-440f-aded-9a57c635e6e5/-/preview/228x337/-/format/auto/"
            delay="0.2s"
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
    className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 opacity-0 animate-fade-in"
    style={{ animationDelay: delay }}
  >
    <div className="aspect-[4/5] overflow-hidden">
      <img
        src={imageSrc}
        alt="Depoimento de cliente satisfeito"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    {/* Overlay gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
);

export default TestimonialsSection;
