import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import TechnicalExpertise from "./components/TechnicalExpertise/TechnicalExpertise";

export default function Home() {
  return (
    <div className="max-w-container-max mx-auto px-4">
      {/* Hero Section */}
      <main>
        <HeroSection />
        <TechnicalExpertise />
      </main>

    </div>
  );
}
