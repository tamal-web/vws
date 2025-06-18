import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen">
      <div className="hero w-full flex flex-col items-center">
        <div className="relative">
          <Image
            src={"/img/logo/NgoLogoBlue.png"}
            alt="Logo"
            width={130}
            height={0}
            className="h-auto relative mt-[2.2rem]"
          />
        </div>
        <h1 className="font-heading font-[600] text-[4.6rem] text-brand leading-[5.7rem] text-center mt-[0.6rem]">
          Seeds of Learning, <br /> Fields of Hope
        </h1>
        <div className="hero-images w-full flex flex-row h-auto px-[2rem] gap-[1rem] mt-[1.45rem]">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full flex flex-row items-star lg:gap-[0.59rem] md:gap-[0.28rem] transform translate-y-[1rem]  pr-[0.7rem]">
              <Image
                src={"/img/arrow/leftArrow.png"}
                alt="LeftArrow"
                width={220}
                height={276}
                sizes="auto"
                className="lg:max-w-[7.9rem] md:max-w-[6.4rem]! h-auto opacity-95 flex-1"
              />
              <h1 className="opacity-70 lg:text-[1.5rem] md:text-[1.3rem] text-[1rem] font-caption transform translate-y-[-1rem] lg:leading-[1.84rem] md:leading-[1.5rem] text-black">
                Keeping <br />
                updated
              </h1>
            </div>
            <Image
              src={"/img/hero/left.png"}
              alt="LeftPics"
              width={2613}
              height={1743}
              className="w-[20rem] h-auto relative object-cover rounded-[1.7rem] border-[2px] border-white transform rotate-[-8deg]"
            />
          </div>
          <div className="w-1/2 relative flex-1 flex justify-center items-center h-auto">
            <div className="relative w-[50dvw] p-3 bg-brown rounded-[1.7rem]">
              <div className="rounded-full  bg-[rgba(255,255,255,0.3)] transform backdrop-blur-[0.9rem] h-[3.8rem] w-[3.8rem] absolute z-[10] flex items-center justify-center top-[50%] left-[50%] transfrom translate-y-[-50%] translate-x-[-50%]">
                <Image
                  src={"/img/vectoricon/vidplay.png"}
                  width={112}
                  height={112}
                  sizes="auto"
                  alt="play"
                  className="w-full h-auto relative object-cover m-[0.7rem] ml-[1rem]!"
                />
              </div>
              <Image
                src={"/img/hero/center.png"}
                width={2613}
                height={1742}
                alt="mainPic"
                className="w-full h-auto relative object-cover rounded-2xl"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={"/img/hero/rightt.png"}
              alt="RightPic"
              width={2613}
              height={1742}
              className="w-[20rem] h-auto relative object-cover rounded-[1.7rem] border-[2px] border-white transform rotate-[9deg]"
            />
            <div className="w-full flex flex-row items-end justify-center lg:gap-[0.6rem] md:gap-[0.4rem]">
              <h1 className="opacity-60 text-black lg:text-[1.5rem] md:text-[1.3rem] text-[0.9rem] font-caption transform translate-y-[0.36rem] lg:leading-8 md:leading-[1.6rem]">
                Event
              </h1>
              <Image
                src={"/img/arrow/rightArrow.png"}
                alt="LeftArrow"
                width={179}
                height={194}
                sizes="auto"
                className="lg:max-w-[5.4rem]! md:max-w-[4.3rem]! flex-1 h-auto! opacity-65"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" about border-brown border-1 items-center flex flex-col mt-[5rem] mb-[5rem] pt-[2.8rem] pb-[2.4rem] px-[2.5rem] rounded-[2rem] mx-[2.5rem] gap-0">
        <span className="badge px-3 py-2 rounded-full border-1 border-brown mb-[1.5rem]">
          About Us
        </span>
        <div className="w-full flex flex-col">
          <h1 className="font-headingBold lg:text-[2.8rem] md:text-[2.1rem] font-[600] max-w-[88%] md:leading-[2.76rem] lg:leading-[3.7rem] lg:mb-[3rem] md:mb-[1.8rem]">
            Vrinda Welfare Society is a registered non{"\u2011"}profit
            organisation, dedicated to uplift rural and underserved communities
            across the state.
          </h1>
          <div className="images lg:h-[21rem] md:h-[16rem] flex flex-row justify-start items-center overflow-x-auto gap-[1.6rem] no-scrollbar">
            <Image
              src={"/img/about/1.png"}
              alt="1"
              width={2524}
              height={1752}
              sizes="auto"
              className="h-full w-auto shrink-0 rounded-[1.7rem]"
            />
            <Image
              src={"/img/about/2.png"}
              alt="2"
              width={2493}
              height={1752}
              sizes="auto"
              className="h-full w-auto shrink-0 rounded-[1.7rem]"
            />
            <Image
              src={"/img/about/3.png"}
              alt="3"
              width={2580}
              height={1752}
              sizes="auto"
              className="h-full w-auto shrink-0 rounded-[1.7rem]"
            />
          </div>
          <div className=" items-start justify-center w-full flex flex-row lg:px-[3rem] md:px-[1.8rem] mt-[2.8rem] lg:text-[1.4rem] md:text-[1.2rem] lg:gap-[4.4rem] md:gap-[2.4rem] box-border">
            <p className="font-heading flex-1">
              <span className="font-semibold">What We Do?</span>
              <br /> We run educational and skill
              <span className="leading-[1rem]">
                {"\u2011"}training programs, organize medical camps, encourage
                sports and support youth and startups, serving without
                discrimination of caste, creed, or religion.
              </span>
            </p>
            <p className="font-heading flex-1 ">
              <span className="font-semibold">Why It Matters?</span>
              <br />
              <span className="leading-[1.9rem]">
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
