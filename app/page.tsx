import HeroSection from "./comp/section/hero-section";
import AboutSection from "./comp/section/about-section";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
    </div>
  );
}
