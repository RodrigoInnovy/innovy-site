import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemsSection } from "@/components/ProblemsSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemsSection />
      <SolutionsSection />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
