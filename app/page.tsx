import Image from "next/image";
import Link from "next/link";
import { InstaIcon } from "./comp/socialIcon/insta-icon";
import { FgIcon } from "./comp/socialIcon/fg-icon";
import { XIcon } from "./comp/socialIcon/x-icon";
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
            <div className="w-full flex flex-row items-star gap-[0.7rem] transform translate-y-[1rem]">
              <Image
                src={"/img/arrow/leftArrow.png"}
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
            <div className="w-full flex flex-row items-end justify-center gap-[0.7rem]">
              <h1 className=" text-[1.5rem] font-caption transform translate-y-[0.5rem] leading-8">
                Event
              </h1>
              <Image
                src={"/img/arrow/rightArrow.png"}
                alt="LeftArrow"
                width={179}
                height={194}
                className="max-h-[5rem] w-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" about border-brown border-1 items-center flex flex-col mt-[5rem] mb-[5rem] py-[3rem] px-[2.5rem] rounded-[2rem] mx-[2.5rem]">
        <span className="badge px-3 py-2 rounded-full border-1 border-brown mb-[1rem]">
          About Us
        </span>
        <div className="w-full flex flex-col">
          <h1 className="font-headingBold text-[3rem] font-[500] max-w-[85%] leading-16 mb-[2rem]">
            Vrinda Welfare Society is a registered non{"\u2011"}profit,
            dedicated to uplifting rural and underserved communities across the
            state
          </h1>
          <div className="images h-[22rem] flex flex-row justify-start items-center overflow-x-auto gap-[1.6rem] no-scrollbar">
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
          <div className="w-full flex flex-row px-[3rem] mt-[2.5rem] text-[1.4rem] gap-[4.4rem] box-border">
            <p className="font-heading flex-1">
              <span className="font-semibold">What We Do?</span>
              <br /> We organize medical camps, run educational and vocational
              {"\u2011"}training programs, and support disaster relief—always
              serving without discrimination of caste, creed, or religion.
            </p>
            <p className="font-heading flex-1">
              <span className="font-semibold">Why It Matters?</span>
              <br /> By promoting health, education, and socio{"\u2011"}economic
              welfare, we empower villagers to build brighter futures—together.
            </p>
          </div>
        </div>
      </div>
      <div className="footer bg-footer w-full px-[5rem] py-[3.6rem] flex flex-row gap-[2rem] items-center justify-center">
        <div className="flex-1 h-full border-r-2 border-r-[rgba(255,255,255,0.5)] flex flex-col items-start justify-center gap-[2rem]">
          <Image
            src={"/img/logo/wFullLogoNgo.png"}
            alt="footerLogoImage"
            width={3571}
            height={1131}
            sizes="auto"
            className="w-[24rem] h-auto"
          />
          <div className="h-full">
            <h1 className="text-white font-heading text-[1.4rem] max-w-[90%] leading-[1.86rem]">
              Vrinda Welfare Society is a registered non{"\u2011"}profit based
              in Punjab, dedicated to uplifting rural and underserved
              communities across the state.
            </h1>
          </div>
          <div className="social w-full flex flex-row items-center justify-end gap-[0.65rem] pr-[1.5rem]">
            <Link href={"https://instagram.com/vrindawelfare"}>
              <div className="insta h-[3.8rem] w-[3.8rem] p-[0.88rem] items-center justify-center rounded-full border-1 border-white fill-white hover:fill-black  hover:bg-white">
                <InstaIcon />
              </div>
            </Link>
            <Link href={"https://facebook.com/vrindawelfare"}>
              <div className="fg h-[3.8rem] w-[3.8rem] p-[0.6rem] pr-[0.78rem] items-center justify-center rounded-full border-1 border-white fill-white hover:fill-black  hover:bg-white">
                <FgIcon />
              </div>
            </Link>
            <Link href={"https://x.com/vrindawelfare"}>
              <div className="x h-[3.8rem] w-[3.8rem] p-[0.98rem] items-center justify-center rounded-full border-1 border-white fill-white hover:fill-black  hover:bg-white">
                <XIcon />
              </div>
            </Link>
          </div>
        </div>

        <div className="flex-1 h-full">
          <div></div>
        </div>
      </div>
      <div className="bg-footerSecondary px-[8rem] py-[2rem] flex flex-row justify-between text-white">
        <h1>© 2025 Vrinda Welfare. All Rights Reserved</h1>
        <Link href={"/privacy-policy"}>
          {" "}
          <h1>Privacy Policy</h1>
        </Link>
      </div>
    </div>
  );
}
