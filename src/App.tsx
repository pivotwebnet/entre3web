import BackToTop from '@/components/BackToTop';
import About from '@/components/About';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import GrowthChart from '@/components/GrowthChart';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Process from '@/components/Process';
import ScrollProgress from '@/components/ScrollProgress';
import Services from '@/components/Services';
import TrustStrip from '@/components/TrustStrip';
import WhatsAppButton from '@/components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <GrowthChart />
        <About />
        <Process />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}

export default App;
