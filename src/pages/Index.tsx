import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/landing/HeroSection";
import PortfolioSection from "@/components/landing/PortfolioSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>King's - Transforme Ideias em Sites Vendedores</title>
        <meta
          name="description"
          content="Desenvolvemos sites que atraem clientes e impulsionam vendas. Hospedagem de qualidade e design responsivo. Veja resultados em até 30 dias!"
        />
        <meta
          name="keywords"
          content="sites vendedores, atração de clientes, design responsivo, hospedagem, vendas automáticas"
        />
      </Helmet>

      <main className="min-h-screen bg-background">
        <HeroSection />
        <PortfolioSection />
        <TestimonialsSection />
        <BenefitsSection />
        <PricingSection />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
