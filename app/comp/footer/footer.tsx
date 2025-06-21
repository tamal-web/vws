import Image from "next/image";
import Link from "next/link";
import { InstaIcon } from "@/app/comp/socialIcon/insta-icon";
import { FgIcon } from "@/app/comp/socialIcon/fg-icon";
import { XIcon } from "@/app/comp/socialIcon/x-icon";
import { MailIcon } from "lucide-react";
import VDButton from "@/app/comp/nav/VDButton";

export default function Footer() {
  return (
    <>
      <div className="cta w-full  lg:px-[4rem] md:px-[2.5rem] px-[1.5rem] flex flex-col gap-[1rem] md:flex-row items-center justify-between pb-[2rem] pt-[5rem] ">
        <h1 className="text-center font-(family-name:--font-abhya) font-semibold lg:text-[2.8rem] md:text-[2rem] text-[2.1rem] leading-[2.2rem] md:leading-none ">
          Lend a Hand, <br className="md:hidden" /> Share Your Heart.
        </h1>
        <VDButton />
      </div>
      <div className="footer bg-footer w-full lg:px-[4rem] md:px-[2.5rem] px-[1.5rem] md:py-[3.6rem] pt-[3.5rem] pb-[3rem] flex flex-col md:flex-row gap-[2rem] items-start md:items-stretch justify-start md:justify-center text-white">
        <div className=" shrink-5! fle max-w-[32rem]  pb-[2rem] md:pb-[0rem] sm:border-r-0 border-b-2 border-b-[rgba(255,255,255,0.3)] md:border-b-0 md:border-r-2 md:border-r-[rgba(255,255,255,0.3)] flex flex-col items-start lg:justify-between md:justify-start gap-[2rem] pr-[2.2rem]">
          <div className="flex flex-col items-start justify-start lg:gap-[1.3rem] md:gap-[0.9rem] gap-[0.8rem]">
            <Image
              src={"/img/logo/wFullLogoNgo.png"}
              alt="footerLogoImage"
              width={3571}
              height={1131}
              sizes="auto"
              className="w-[24rem] h-auto "
            />
            <div className="">
              <h1 className="text-white font-(family-name:--font-abhya) lg:text-[1.2rem] md:text-[1.2rem]  leading-[1.86rem] ">
                Vrinda Welfare Society is a registered non{"\u2011"}profit based
                in Punjab, dedicated to uplifting rural and underserved
                communities across the state.
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-[1.2rem]">
            <div className="social w-full flex flex-row items-center justify-start gap-[0.65rem] ">
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
            <div className="contact w-full flex items-center md:justify-start justify-start">
              <Link
                href={"mailto:support@vrindawelfare.com"}
                className="email flex flex-row justify-center items-center gap-[0.6rem] font-(family-name:--font-abhya) text-[1.2rem]"
              >
                <MailIcon className="h-[1.6rem] w-auto" />
                <h1> support@vrindawelfare.com</h1>
              </Link>
            </div>
          </div>
        </div>

        <div className="grow-5  flex flex-col items-start md:justify-center justify-start gap-[2rem] ">
          <div className="quickLinks">
            <h2 className="font-(family-name:--font-abhya) font-semibold text-[1.5rem]">
              Quick Links
            </h2>
            <div className="lg:flex lg:flex-row grid grid-cols-2 flex-co gap-[2rem] items-start justify-start lg:text-[0.9rem] md:text-[0.8rem] text-[0.8rem]">
              <div className="flex flex-col items-start justify-start gap-[0.5rem] mt-[1rem] ">
                <h1
                  //   href={"/about"}
                  className="text-[1.2rem] font-semibold font-(family-name:--font-abhya)"
                >
                  Vrinda Welare Society
                </h1>
                <Link
                  href={"/about"}
                  className="hover:underline underline-offset-[3px]"
                >
                  About Us
                </Link>
                <Link
                  href={"/about/mission"}
                  className="hover:underline underline-offset-[3px]"
                >
                  Our Mission
                </Link>
                <Link
                  href={"/about/belief"}
                  className="hover:underline underline-offset-[3px]"
                >
                  Our Beliefs
                </Link>
                <Link
                  href={"/about/impact"}
                  className="hover:underline underline-offset-[3px]"
                >
                  Our Impact
                </Link>
                <Link
                  href={"/about/team"}
                  className="hover:underline underline-offset-[3px]"
                >
                  Our Core Team
                </Link>
                <Link
                  href={"/about/plan"}
                  className="hover:underline underline-offset-[3px]"
                >
                  Our Future Plans
                </Link>
                <Link
                  href={"/privacy-policy"}
                  className="hover:underline underline-offset-[3px]"
                >
                  Privacy Policy
                </Link>
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.5rem] mt-[1rem]">
                <h1
                  //   href={"/about"}
                  className="text-[1.2rem] font-(family-name:--font-abhya) font-semibold"
                >
                  Our Work
                </h1>
                <Link
                  href={"/about/work/"}
                  className="hover:underline underline-offset-[3px]"
                >
                  Education
                </Link>
                <Link
                  href={"/about/work/"}
                  className="hover:underline underline-offset-[3px]"
                >
                  Rural Empowerment
                </Link>
                <Link
                  href={"/about/work/"}
                  className="hover:underline underline-offset-[3px]"
                >
                  Health
                </Link>
                <Link
                  href={"/about/work/"}
                  className="hover:underline underline-offset-[3px]"
                >
                  Sports
                </Link>
                <Link
                  href={"/about/work/"}
                  className="hover:underline underline-offset-[3px]"
                >
                  Startups
                </Link>
              </div>
              {/* </div> */}
              {/* <div className="flex gap-[2rem] items-start justify-start "> */}
              <div className="flex flex-col items-start justify-start gap-[0.5rem] mt-[1rem]">
                <h1
                  //   href={"/about"}
                  className=" text-[1.2rem] font-(family-name:--font-abhya) font-semibold"
                >
                  Get Involved
                </h1>
                <Link
                  href={"/get-involved/"}
                  className="hover:underline underline-offset-[3px]"
                >
                  Individual
                </Link>
                <Link
                  href={"/get-involved/"}
                  className="hover:underline underline-offset-[3px]"
                >
                  Corporates
                </Link>
                <Link
                  href={"/get-involved/"}
                  className="hover:underline underline-offset-[3px]"
                >
                  Institutes/School
                </Link>
                <Link
                  href={"/get-involved/"}
                  className="hover:underline underline-offset-[3px]"
                >
                  Career
                </Link>
                <Link
                  href={"/get-involved/"}
                  className="hover:underline underline-offset-[3px]"
                >
                  Procedure
                </Link>
                <Link
                  href={"/get-involved/"}
                  className="hover:underline underline-offset-[3px]"
                >
                  Rules
                </Link>
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.5rem] mt-[1rem]">
                <h1
                  //   href={"/about"}
                  className=" text-[1.2rem] font-(family-name:--font-abhya) font-semibold"
                >
                  Resources
                </h1>
                <Link
                  href={"/event"}
                  className="hover:underline underline-offset-[3px]"
                >
                  Current Events
                </Link>
                <Link
                  href={"/event"}
                  className="hover:underline underline-offset-[3px]"
                >
                  Past Events
                </Link>
                <Link
                  href={"/blog"}
                  className="hover:underline underline-offset-[3px]"
                >
                  Blog
                </Link>
                <Link
                  href={"/newsletter"}
                  className="hover:underline underline-offset-[3px]"
                >
                  Newsletter
                </Link>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-footerSecondary w-full lg:px-[4rem] md:px-[2.5rem] px-[1.5rem]  py-[2rem] flex flex-row justify-between text-white text-[0.7rem] md:text-[1rem]">
        <h1>© 2025 Vrinda Welfare. All Rights Reserved</h1>
        <Link href={"/privacy-policy"}>
          {" "}
          <h1>Privacy Policy</h1>
        </Link>
      </div>
    </>
  );
}
