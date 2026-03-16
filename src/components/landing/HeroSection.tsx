import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Monitor, TrendingUp, Rocket } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-radial overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in">
            Transformamos suas ideias em sites que{" "}
            <span className="text-gradient-gold">vendem por você</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Atraem clientes e impulsionam vendas.
          </p>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <FeatureCard
              icon={<Monitor className="w-8 h-8" />}
              title="Seu Site Pronto"
              subtitle="de 10 a 30 dias"
              delay="0.3s"
            />
            <FeatureCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Vendas Automáticas"
              subtitle="Perfeito para"
              delay="0.4s"
            />
            <RocketFeatureCard delay="0.5s" />
          </div>

          {/* CTA Button */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
            >
              <a href="#trabalhos">NOSSOS TRABALHOS</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  delay: string;
}

const FeatureCard = ({ icon, title, subtitle, delay }: FeatureCardProps) => (
  <div
    className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300 hover:bg-card opacity-0 animate-fade-in"
    style={{ animationDelay: delay }}
  >
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    {subtitle && (
      <p className="text-sm text-muted-foreground mb-1">{subtitle}</p>
    )}
    <h3 className="text-lg font-semibold text-foreground">{title}</h3>
  </div>
);

export default HeroSection;
