import HeroSection from '@/components/sections/HeroSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import ServicesSection from '@/components/sections/ServicesSection';
import StatsSection from '@/components/sections/StatsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ComparisonSection />
      <ServicesSection />
      <StatsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
