import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import StatsSection from "@/components/landing/StatsSection";
import PortfolioSection from "@/components/landing/PortfolioSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import ProcessSection from "@/components/landing/ProcessSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import PricingSection from "@/components/landing/PricingSection";
import CTASection from "@/components/landing/CTASection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>King's - Criação de Sites Profissionais que Vendem</title>
        <meta
          name="description"
          content="Agência King's: criação de sites profissionais para empresas. Escopo e prazo por escrito, entrega em até 30 dias e 30 dias de suporte gratuito."
        />
        <meta
          name="keywords"
          content="criação de sites, agência de sites, sites profissionais, landing page, design responsivo"
        />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-background">
        <HeroSection />
        <StatsSection />
        <PortfolioSection />
        <TestimonialsSection />
        <BenefitsSection />
        <ProcessSection />
        <GuaranteeSection />
        <PricingSection />
        <CTASection />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
