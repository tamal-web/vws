import React from "react";
import TopSection from "@/app/comp/section/top-section";
import TextBoxSection from "@/app/comp/section/textbox-section";
import { cn } from "@/lib/utils";
import ContentBoxSection from "@/app/comp/section/content-box-section";
import { projects } from "@/app/data/projects";

export default function Impact() {
  return (
    <div className="w-full">
      <TopSection title="Our Impact" />
      <main
        className={cn(
          "w-full flex flex-col items-center justify-start ",
          "lg:px-[clamp(1.8rem,6.4vw,6.8rem)] lg:gap-[2rem]",
          "md:px-[clamp(1.8rem,6.2vw,6.8rem)] md:gap-[1.5rem]",
          "px-[0.76rem] gap-[1.5rem]"
        )}
      >
        {" "}
        <TextBoxSection title="Our Impact">
          At Vrinda Welfare Society, we believe that impact is not measured in
          numbers alone — it is seen in lives uplifted, minds awakened, and hope
          restored. Through our grassroots efforts, we aim to build real,
          lasting change in the lives of children, youth, and families.
          <br />
          <br />
          One of our most impactful and ongoing initiatives is MAC Classes — an
          educational movement that reflects our deep commitment to accessible,
          quality education for all.
        </TextBoxSection>
        {projects["ImpactPage"].map((project) => (
          <ContentBoxSection
            id={project.id}
            contents={project.contents}
            key={project.id}
          />
        ))}
      </main>
    </div>
  );
}
