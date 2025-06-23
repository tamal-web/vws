import React from "react";
import TopSection from "@/app/comp/section/top-section";
import TextBoxSection from "@/app/comp/section/textbox-section";
import { cn } from "@/lib/utils";

export default function Belief() {
  return (
    <div className="w-full">
      <main
        className={cn(
          "w-full lg:px-[6.5rem md:px-[2.8rem px-[2rem",
          "px-[clamp(1.8rem,6.4vw,6.8rem)] md:px-[clamp(1.8rem,6.2vw,6.8rem)] px-[1.8rem]"
        )}
      >
        {" "}
        <TopSection title="Our Belief" />
        <TextBoxSection title="Our Belief">
          At Vrinda Welfare Society, our work is shaped not just by plans and
          programs, but by the core beliefs that guide everything we do. These
          beliefs are the soul of our organization — they remind us why we
          started, who we serve, and how we grow together.
          <br />
          <br />
          We believe in the power of people, the strength of small acts, and the
          possibility of change — no matter how challenging the circumstances.
        </TextBoxSection>
      </main>
    </div>
  );
}
