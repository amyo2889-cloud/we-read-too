import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import BrandBridge from "@/components/landing/BrandBridge";
import BooksSection from "@/components/landing/BooksSection";
import BundlesSection from "@/components/landing/BundlesSection";
import AboutSection from "@/components/landing/AboutSection";
import EventsSection from "@/components/landing/EventsSection";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonial from "@/components/landing/Testimonial";
import ShopCTA from "@/components/landing/ShopCTA";
import EmailSignup from "@/components/landing/EmailSignup";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <BrandBridge />
      <BooksSection />
      <BundlesSection />
      <AboutSection />
      <EventsSection />
      <HowItWorks />
      <Testimonial />
      <ShopCTA />
      <EmailSignup />
      <Footer />
    </div>
  );
};

export default Index;
