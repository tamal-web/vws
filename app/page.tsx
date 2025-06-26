import HeroSection from "./comp/section/hero-section";
import ProjectSection from "./comp/section/project-section";
import AboutSection from "./comp/section/about-section";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <div
        className={cn(
          "w-full max-w-[100dvw] box-border min-h-[20rem] overflfow-x-hidden"
        )}
      >
        <ProjectSection className=" lg:px-[clamp(1.8rem,6.4vw,6.8rem)]  md:px-[clamp(1.8rem,6.2vw,6.8rem)] px-[1.8rem]" />
      </div>
    </div>
  );
}
