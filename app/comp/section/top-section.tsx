import Image from "next/image";

export default function TopSection({ title }: { title: string }) {
  return (
    <div className="hero w-full flex flex-col items-center">
      <div className="relative">
        <Image
          src={"/img/logo/NgoLogoBlue.png"}
          alt="Logo"
          width={1413}
          height={1131}
          sizes="auto"
          className="md:w-[6.8rem] w-[5.5rem] h-auto relative mt-[1rem]"
        />
        {/* <Image
          src={"/img/logo/FullLogoNgo.png"}
          alt="Logo"
          width={3571}
          height={1131}
          sizes="auto"
          className="md:w-[13rem] w-[12.5rem] h-auto relative mt-[2rem]"
        /> */}
      </div>
      <h1 className="font-(family-name:--font-abhya) font-medium text-[2.8rem] md:text-[4.4rem] text-brand md:leading-[5.7rem] leading-none! text-center mt-[0rem]">
        {title}
      </h1>
      <div className="hero-images w-full flex flex-row items-stretch justify-center h-auto px-[2rem] gap-[0.8rem] mt-[0.8rem]">
        <div className="hidden md:flex flex-col items-center justify-end ">
          <div className="w-full flex flex-row items-star lg:gap-[0.59rem] md:gap-[0.28rem] transform translate-y-[1rem]  pr-[0.7rem]">
            <Image
              src={"/img/arrow/leftArrow.png"}
              alt="LeftArrow"
              width={220}
              height={276}
              sizes="auto"
              className="lg:max-w-[6.8rem] md:max-w-[6.1rem]! h-auto opacity-95 flex-1"
            />
            <h1 className="opacity-70 lg:text-[1.3rem] md:text-[1.1rem] text-[0.9rem] font-caption transform translate-y-[-1rem] lg:leading-[1.6rem] md:leading-[1.4rem] text-black">
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
            className="w-[17.5rem] md:w-[13.5rem] h-auto relative object-cover rounded-[1.7rem] border-[2px] border-white transform rotate-"
          />
        </div>
        <div className="relative flex justify-center items-center h-auto">
          <div className="relative w-[90%] md:w-[32vw] p-2 md:p-3 bg-brown rounded-[1.4rem] md:rounded-[1.7rem]">
            <div className="rounded-full  bg-[rgba(255,255,255,0.3)] transform backdrop-blur-[0.9rem] h-[3.8rem] w-[3.8rem] absolute z-[8] flex items-center justify-start top-[50%] left-[50%] transfrom translate-y-[-50%] translate-x-[-50%]">
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
              className="w-full h-auto relative object-cover rounded-2xl "
            />
          </div>
        </div>
        <div className="hidden md:flex flex-col items-center justify-start">
          <Image
            src={"/img/hero/rightt.png"}
            alt="RightPic"
            width={2613}
            height={1742}
            sizes="auto"
            className="w-[17.2rem] md:w-[13.2rem] h-auto relative object-cover rounded-[1.7rem] border-[2px] border-white"
          />
          <div className="w-full flex flex-row items-end justify-center lg:gap-[0.6rem] md:gap-[0.4rem]">
            <h1 className="opacity-60 text-black lg:text-[1.3rem] md:text-[1.1rem] text-[0.9rem] font-caption transform translate-y-[0.36rem] lg:leading-[1.6rem] md:leading-[1.4rem]">
              Event
            </h1>
            <Image
              src={"/img/arrow/rightArrow.png"}
              alt="LeftArrow"
              width={179}
              height={194}
              sizes="auto"
              className="lg:max-w-[4.2rem]! md:max-w-[3.2rem]! flex-1 h-auto! opacity-65"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
