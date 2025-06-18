import Image from "next/image";
import Link from "next/link";
import { InstaIcon } from "@/app/comp/socialIcon/insta-icon";
import { FgIcon } from "@/app/comp/socialIcon/fg-icon";
import { XIcon } from "@/app/comp/socialIcon/x-icon";
import { MailIcon } from "lucide-react";

export default function Footer() {
  return (
    <>
      <div className="footer bg-footer w-full lg:px-[8rem] md:px-[4rem] py-[3.6rem] flex flex-row gap-[2rem] items-cente items-stretch justify-center text-white">
        <div className="flex-1 h-full border-r-2 border-r-[rgba(255,255,255,0.3)] flex flex-col items-start justify-between gap-[2rem]">
          <div className="flex flex-col items-start justify-start gap-[1.3rem]">
            <Image
              src={"/img/logo/wFullLogoNgo.png"}
              alt="footerLogoImage"
              width={3571}
              height={1131}
              sizes="auto"
              className="w-[24rem] h-auto pr-[2rem]"
            />
            <div className="">
              <h1 className="text-white font-heading lg:text-[1.4rem] md:text-[1.1rem] pr-[1.5rem] max-w-[90% leading-[1.86rem]">
                Vrinda Welfare Society is a registered non{"\u2011"}profit based
                in Punjab, dedicated to uplifting rural and underserved
                communities across the state.
              </h1>
            </div>
          </div>
          <div className="social w-full flex flex-row items-center justify-start gap-[0.65rem] pr-[2rem]">
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

        <div className="flex-1  flex flex-col justify-between ">
          <div className="quickLinks">
            <h2 className="font-heading font-[600] text-[1.5rem]">
              Quick Links
            </h2>

            <div className="flex flex-col items-start justify-start gap-[0.5rem] mt-[1rem] text-[1.1rem]">
              <Link href={"/about"}>About</Link>
              <Link href={"/events"}>Events</Link>
              <Link href={"/about-team"}>Team</Link>
              <Link href={"/gallerly"}>Gallerly</Link>
              <Link href={"/donate"}>Donate</Link>
            </div>
          </div>
          <div className="contact w-full flex items-center justify-center">
            {/* <h2>Contact</h2> */}
            {/* <Image src={}/> */}
            <Link
              href={"mailto:vrindawelfare@gmail.com"}
              className="email flex flex-row justify-center items-center gap-[0.6rem] font-heading text-[1.4rem]"
            >
              <MailIcon className="h-8 w-auto" />
              <h1> vrindawelfare@gmail.com</h1>
            </Link>

            {/* </div> */}
          </div>
        </div>
      </div>

      <div className="bg-footerSecondary lg:px-[8rem] md:px-[5rem] py-[2rem] flex flex-row justify-between text-white">
        <h1>© 2025 Vrinda Welfare. All Rights Reserved</h1>
        <Link href={"/privacy-policy"}>
          {" "}
          <h1>Privacy Policy</h1>
        </Link>
      </div>
    </>
  );
}
