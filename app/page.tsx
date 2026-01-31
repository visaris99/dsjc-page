import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PainPointSection from '@/components/sections/PainPointSection';
import StatsSection from '@/components/sections/StatsSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ComparisonSection />
      <ServicesSection />
      <PainPointSection />
      <StatsSection />
      <Footer />
    </main>
  );
}
