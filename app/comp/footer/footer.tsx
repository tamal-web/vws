import Image from "next/image";
import Link from "next/link";
import { InstaIcon } from "@/app/comp/socialIcon/insta-icon";
import { FgIcon } from "@/app/comp/socialIcon/fg-icon";
import { XIcon } from "@/app/comp/socialIcon/x-icon";

export default function Footer() {
  return (
    <>
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
    </>
  );
}
