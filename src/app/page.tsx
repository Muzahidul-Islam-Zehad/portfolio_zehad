import ContactSection from "./components/ContactSection/ContactSection";
import HeroSection from "./components/HeroSection/HeroSection";
import Projects from "./components/Projects/Projects";
import TechnicalExpertise from "./components/TechnicalExpertise/TechnicalExpertise";

export default function Home() {
  return (
    <div className="max-w-container-max mx-auto px-4">
      {/* Hero Section */}
      <main>
        <HeroSection />
        <TechnicalExpertise />
        <Projects /> 
        <ContactSection />
      </main>

    </div>
  );
}
