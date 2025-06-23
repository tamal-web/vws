import TopSection from "@/app/comp/section/top-section";
import TextBoxSection from "@/app/comp/section/textbox-section";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
export default function AboutPage() {
  return (
    <div className="w-full">
      <main
        className={cn(
          "w-full lg:px-[6.5rem md:px-[2.8rem px-[2rem",
          "px-[clamp(1.8rem,6.4vw,6.8rem)] md:px-[clamp(1.8rem,6.2vw,6.8rem)] px-[1.8rem]"
        )}
      >
        <TopSection title={"About Us"} />
        <TextBoxSection title="About Us">{` Vrinda Welfare Society was founded to address gaps in healthcare,
            education, and livelihood opportunities across rural Punjab. Our
            registered office is at SCO No. ${"\u202f"} 4, Kalsia Square, VIP
            Road, Zirakpur (140603). Since inception, we${"\u2019"}ve been
            committed to serving society${"\u2019"}s most vulnerable—orphans,
            disaster ${"\u2011"}affected families, persons with disabilities, and
            the economically disadvantaged—without any discrimination`}</TextBoxSection>
        <BoxSection />
      </main>
    </div>
  );
}

function BoxSection() {
  return (
    <div
      className={cn(
        "cardbox-container w-full h-[25rem overflow-y-visible  mt-[2.4rem] flex flex-row justify-center items-stretch lg:gap-[clamp(1.2rem,1.6vw,1.6rem)] md:gap-[1.2rem] gap-[1.6rem] flex-wrap lg:flex-nowrap"
      )}
    >
      {/* box 1 */}
      <div className="max-w-[32rem] border-brand! cardbox cardbox-apply grow-1 shrink-1 h-ful border-2 px-5 py-5 flex flex-col justify-between items-start rounded-[2rem]">
        <div className="flex flex-col lg:gap-[0.5rem] md:gap-[0.3rem] gap-[0.3rem]">
          <h1 className="pt-[0.3rem] font-(family-name:--font-abhya) text-[clamp(2rem,4.05vw,3.7rem)] font-extrabold leading-none">
            Our Mission
          </h1>
          <div className="font-(family-name:--font-abhya) ml-[1.8rem]">
            <ul className="list-disc text-[clamp(1rem,1.35vw,1.3rem)] space-y-[0.12rem] opacity-85 mb-[2.2rem] lg:gap-y-0!">
              <li>
                <span className="font-extrabol">Empower Through Education</span>
              </li>
              <li>
                <span className="font-extrabol"> Serve with Compassion </span>
              </li>
              <li>
                <span className="font-extrabol"> Uplift Women and Girls</span>
              </li>
              <li>
                <span className="font-extrabol"> Protect the Environment </span>
              </li>
              <li>
                <span className="font-extrabol">Build a Culture of Giving</span>
              </li>
            </ul>
          </div>
        </div>
        <Link
          href={"/about/mission"}
          className=" text-[clamp(0.98rem,1.6vw,1.5rem)] font-body border  rounded-[10rem] flex flex-row items-center justify-center font-semibold px-[1.4rem] py-[0.8rem] mt-[1.2rem] border-inherit  "
        >
          Know More
          <MoveUpRight className="ml-[0.6rem]" />
        </Link>
      </div>

      {/* box 2 */}
      <div className=" cardbox max-w-[32rem] cardbox-apply grow-1 shrink-1  h-ful border-2 border-brand!  px-[1.5rem] py-5 flex flex-col justify-between items-start  rounded-[2rem] brand-primary  ">
        <div className=" flex flex-col lg:gap-[0.7rem] md:gap-[0.45rem] gap-[0.3rem]">
          <h1 className="pt-[0.3rem] font-(family-name:--font-abhya) text-[clamp(2rem,4.05vw,3.7rem)] font-extrabold leading-none">
            Our Beliefs
          </h1>
          <div className="font-(family-name:--font-abhya) ml-[1.8rem]">
            <ul className="list-disc text-[clamp(1rem,1.35vw,1.3rem)] space-y-[0.12rem] opacity-80 mb-[2.2rem] lg:gap-y-0!">
              <li>
                <span className="font-extrabol"> Universal Access </span>
              </li>
              <li>
                <span className="font-extrabol">
                  {" "}
                  Non{"\u2011"}Discrimination{" "}
                </span>
              </li>
              <li>
                <span className="font-extrabol">Holistic Development </span>
              </li>
              <li>
                <span className="font-extrabol"> Empowerment </span>
              </li>
            </ul>
          </div>
        </div>
        <Link
          href={"/about/belief"}
          className="text-inherit border-inherit  text-[clamp(0.98rem,1.6vw,1.5rem)] font-body border  rounded-[10rem] flex flex-row items-center justify-center font-semibold px-[1.4rem] py-[0.8rem] mt-[1.2rem] "
        >
          Know More
          <MoveUpRight className="ml-[0.6rem]" />
        </Link>
      </div>

      {/* box 3 */}
      <div className="cardbox  relative grow-1 shrink-1  min-h-[20rem] max-w-[32rem]">
        <div className="cardbox-apply    h-full w-full min-h-[20rem] relative flex flex-col justify-between items-start px-5 py-5 border-2 border-brand! rounded-[2rem]">
          <div className="flex flex-col lg:gap-[0.5rem] md:gap-[0.3rem] gap-[0.3rem]">
            <h1 className="pt-[0.3rem] font-(family-name:--font-abhya) text-[clamp(2rem,4.05vw,3.7rem)] font-extrabold leading-none">
              Our Future Plans
            </h1>
            <div className="font-(family-name:--font-abhya) ml-[1.8rem]">
              <ul className="list-disc text-[clamp(1rem,1.35vw,1.3rem)] space-y-[0.12rem] opacity-85 mb-[6.2rem] lg:gap-y-0!">
                <li>
                  <span className="font-extrabol">
                    {" "}
                    Expanding Educational Initiatives{" "}
                  </span>
                </li>
                <li>
                  <span className="font-extrabol">
                    {" "}
                    Non{"\u2011"}Health & Hygiene Drives{" "}
                  </span>
                </li>
                <li>
                  <span className="font-extrabol">
                    {" "}
                    Women Empowerment Programs
                  </span>
                </li>
                <li>
                  <span className="font-extrabol">
                    {" "}
                    Green & Clean Environment{" "}
                  </span>
                </li>
                <li>
                  <span className="font-extrabol">
                    {" "}
                    Shelter & Clothing for the Needy{" "}
                  </span>
                </li>
                <li>
                  <span className="font-extrabol">
                    {" "}
                    Youth Engagement & Volunteer Network{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="brand-secondary cutout   rounded-tr-[2.2rem] absolute bottom-0 left-0   z-[7] border-r-2 border-t-2">
          <div className=" relative h-full w-full  pr-[0.8rem] pt-[1rem] flex flex-col justify-end items-start ">
            <Link
              href={"/about/plan"}
              className=" text-[clamp(0.98rem,1.6vw,1.5rem)] font-body border-2 border-brand rounded-[10rem] flex flex-row items-center justify-center font-semibold px-[1.4rem] py-[0.8rem] mt-[1.2rem]]  "
            >
              Know More
              <MoveUpRight className="ml-[0.6rem]" />
            </Link>
            <div className="cutOut1"></div>
            <div className="cutOut2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
