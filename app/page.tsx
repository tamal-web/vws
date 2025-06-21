import Image from "next/image";
import HeroSection from "./comp/section/hero-section";

export default function Home() {
  return (
    <div className="w-screen">
      <HeroSection />
      <div className=" about border-brown border-1 items-center flex flex-col mt-[5rem] pt-[2.1rem] md:pt-[2.8rem] md:pb-[2.4rem] pb-[2rem] px-[1.1rem] md:px-[2.5rem] rounded-[1.2rem] md:rounded-[2rem] mx-[0.76rem] md:mx-[2.5rem] gap-0">
        <span className="badge text-[0.86rem] md:text-[1rem] px-3 py-2 rounded-full border-1 border-brown md:mb-[1.5rem] mb-[1.1rem]">
          About Us
        </span>
        <div className="w-full flex flex-col">
          <h1 className="font-(family-name:--font-abhya) lg:text-[2.8rem] md:text-[2.1rem] text-[1.25rem] font-bold max-w-[90%] md:max-w-[88%] leading-[1.55rem] md:leading-[2.5rem] lg:leading-[3.3rem] lg:mb-[2.1rem] md:mb-[1.65rem] mb-[1.2rem]">
            Vrinda Welfare Society is a registered non{"\u2011"}profit
            organisation, dedicated to uplift rural and underserved communities
            across the state.
          </h1>
          <div className="images lg:h-[21rem] md:h-[16rem] h-[10.5rem] flex flex-row justify-start items-center overflow-x-scroll gap-[1rem] md:gap-[1.6rem] no-scrollbar">
            <div className="relative group shadow-lg h-full shrink-0 overflow-hidden md:rounded-[1.7rem] rounded-[1.25rem]">
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.25)] opacity-0 group-hover:opacity-100 transform backdrop-blur-[0.25rem] flex text-center items-center justify-center transition-opacity duration-150 text-white text-[1.2rem] md:text-[1.6rem] font-[600]">
                Medical Camps
              </div>
              <Image
                src={"/img/about/1.png"}
                alt="1"
                width={2524}
                height={1752}
                sizes="auto"
                className="h-full object-cover w-auto"
              />
            </div>
            <div className="relative group shadow-lg h-full shrink-0 overflow-hidden rounded-[1.25rem] md:rounded-[1.7rem]">
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.25)] opacity-0 group-hover:opacity-100 transform backdrop-blur-[0.2rem] flex text-center items-center justify-center transition-opacity duration-150 text-white text-[1.2rem] md:text-[1.6rem] font-[600]">
                Educational Classes
              </div>
              <Image
                src={"/img/about/2.png"}
                alt="2"
                width={2493}
                height={1752}
                sizes="auto"
                className="h-full w-auto shrink-0 "
              />
            </div>
            <div className="relative group shadow-lg h-full shrink-0 overflow-hidden rounded-[1.25rem] md:rounded-[1.7rem]">
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.25)] opacity-0 group-hover:opacity-100 transform backdrop-blur-[0.25rem] flex text-center items-center justify-center transition-opacity duration-150 text-white text-[1.2rem] md:text-[1.6rem] font-[600]">
                Skill-Development Programs
              </div>
              <Image
                src={"/img/about/3.png"}
                alt="3"
                width={2580}
                height={1752}
                sizes="auto"
                className="h-full w-auto "
              />
            </div>
          </div>
          <div className=" md:items-start md:justify-center w-full flex flex-col items-center justify-start gap-[1.52rem] md:flex-row lg:px-[3rem] md:px-[1.8rem] lg:mt-[2.5rem] md:mt-[2.3rem] mt-[1.8rem] lg:text-[1.4rem] md:text-[1.2rem] lg:gap-[4.4rem] md:gap-[2.4rem] box-border">
            <p className="font-(family-name:--font-abhya) flex-1">
              <span className="font-extrabold">What We Do?</span>
              <br />
              <span className="lg:leading-[1rem] md:leading-[0.65rem]! leading-[0.5rem]!">
                We run educational and skill{"\u2011"}training programs,
                organize medical camps, encourage sports and support youth and
                startups, serving without discrimination of caste, creed, or
                religion.
              </span>
            </p>
            <p className="font-(family-name:--font-abhya) flex-1">
              <span className="font-extrabold">Why It Matters?</span>
              <br />
              <span className="lg:leading-[1rem] md:leading-[0.65rem]! leading-[0.5rem]!">
                By promoting education, skill development, health, and socio
                {"\u2011"}economic welfare, we empower Startups, Youth and
                people in rural areas to build brighter futures—together.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
