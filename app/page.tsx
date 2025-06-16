import Image from "next/image";
export default function Home() {
  return (
    <div className="w-full">
      <div className="hero w-full flex flex-col items-center">
        <div className="relative">
          <Image
            src={"/img/logos/NgoLogoBlue.png"}
            alt="Logo"
            width={130}
            height={0}
            className="h-auto relative mt-[1.2rem]"
          />
        </div>
        <h1 className="font-heading font-[600] text-[4.6rem] text-brand leading-24 text-center">
          Seeds of Learning, <br /> Fields of Hope
        </h1>
        <div className="hero-images w-full flex flex-row h-auto px-[2rem] gap-[1rem] mt-[2rem]">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full flex flex-row items-star gap-[0.7rem] transform translate-y-[1rem]">
              <Image
                src={"/img/arrows/leftArrow.png"}
                alt="LeftArrow"
                width={220}
                height={276}
                className="max-h-[28rem] w-auto"
              />
              <h1 className=" text-[1.5rem] font-caption transform translate-y-[-1rem] leading-8">
                Keeping <br />
                Updated
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
              <div className="rounded-full p-[0.7rem] pl-[1rem]! bg-[rgba(255,255,255,0.3)] transform backdrop-blur-[0.9rem] h-[3.8rem] w-[3.8rem] absolute z-[10] flex items-center justify-center top-[50%] left-[50%] transfrom translate-y-[-50%] translate-x-[-50%]">
                <Image
                  src={"/img/icons/play.png"}
                  alt="play"
                  width={68}
                  height={68}
                  className="w-full h-auto relative"
                />
              </div>
              <Image
                src={"/img/hero/center.png"}
                width={2613}
                height={1742}
                alt="mainPic"
                className="w-[50dvw h-aut w-full h-auto relative object-cover rounded-2xl"
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
            <div className="w-full flex flex-row items-end justify-center gap-[0.7rem]">
              <h1 className=" text-[1.5rem] font-caption transform translate-y-[0.5rem] leading-8">
                Event
              </h1>
              <Image
                src={"/img/arrows/rightArrow.png"}
                alt="LeftArrow"
                width={179}
                height={194}
                className="max-h-[5rem] w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
