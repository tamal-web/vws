"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="hero w-full flex flex-col items-center">
      <div className="relative">
        <Image
          src={"/img/logo/NgoLogoBlue.png"}
          alt="Logo"
          width={1413}
          height={1131}
          sizes="auto"
          className="md:w-[8.125rem] w-[5.5rem] h-auto relative mt-[2.2rem]"
        />
      </div>
      <h1 className="font-heading font-[600] text-[2.8rem] md:text-[4.6rem] text-brand md:leading-[5.7rem] leading-[3.1rem] text-center mt-[0.6rem]">
        Seeds of Learning, <br /> Fields of Hope
      </h1>
      <div className="hero-images w-full flex flex-row h-auto px-[2rem] gap-[1rem] mt-[1.45rem]">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full flex flex-row lg:gap-[0.59rem] md:gap-[0.28rem] gap-[0.26rem] transform translate-y-[1rem]  pr-[0.7rem]">
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
            sizes="auto"
            className="w-[20rem] h-auto relative object-cover rounded-[1.7rem] border-[2px] border-white transform rotate-[-8deg]"
          />
        </div>
        <div className="w-1/2 relative flex-1 flex justify-center items-center h-auto">
          <div className="relative w-[50dvw] p-3 bg-brown rounded-[1.7rem]">
            <div className="rounded-full  bg-[rgba(255,255,255,0.3)] transform backdrop-blur-[0.9rem] h-[3.8rem] w-[3.8rem] absolute z-[8] flex items-center justify-center top-[50%] left-[50%] transfrom translate-y-[-50%] translate-x-[-50%]">
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
              sizes="auto"
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
            sizes="auto"
            className="w-[20rem] h-auto relative object-cover rounded-[1.7rem] border-[2px] border-white transform rotate-[9deg]"
          />
          <div className="w-full flex flex-row items-end justify-center lg:gap-[0.6rem] md:gap-[0.4rem] gap-[0.4rem]">
            <h1 className="opacity-60 text-black lg:text-[1.5rem] md:text-[1.3rem] text-[0.9rem] font-caption transform translate-y-[0.36rem] lg:leading-8 md:leading-[1.6rem]">
              Event
            </h1>
            <Image
              src={"/img/arrow/rightArrow.png"}
              alt="RightArrow"
              width={179}
              height={194}
              sizes="auto"
              className="lg:max-w-[4.8rem]! md:max-w-[4.2rem]! max-w-[3.6rem] flex-1 h-auto! opacity-65"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
