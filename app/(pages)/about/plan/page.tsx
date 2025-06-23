import React from "react";
import TopSection from "@/app/comp/section/top-section";
import TextBoxSection from "@/app/comp/section/textbox-section";
import { cn } from "@/lib/utils";

export default function FuturePlans() {
  return (
    <div className="w-full">
      <main
        className={cn(
          "w-full lg:px-[6.5rem md:px-[2.8rem px-[2rem",
          "px-[clamp(1.8rem,6.4vw,6.8rem)] md:px-[clamp(1.8rem,6.2vw,6.8rem)] px-[1.8rem]"
        )}
      >
        {" "}
        <TopSection title="Our Future Plans " />
        <TextBoxSection title="Our Future Plans ">
          At Vrinda Welfare Society, we believe that meaningful change begins
          with a clear vision. While we have already taken vital steps to uplift
          communities, our journey has only just begun. Our future plans are
          designed to create deeper impact, foster sustainable development, and
          bring people together in service of a better tomorrow.
        </TextBoxSection>
      </main>
    </div>
  );
}
