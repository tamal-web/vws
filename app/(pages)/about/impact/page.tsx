import React from "react";
import TopSection from "@/app/comp/section/top-section";
import TextBoxSection from "@/app/comp/section/textbox-section";
import { cn } from "@/lib/utils";

export default function Impact() {
  return (
    <div className="w-full">
      <main
        className={cn(
          "w-full lg:px-[6.5rem md:px-[2.8rem px-[2rem",
          "px-[clamp(1.8rem,6.4vw,6.8rem)] md:px-[clamp(1.8rem,6.2vw,6.8rem)] px-[1.8rem]"
        )}
      >
        {" "}
        <TopSection title="Our Impact" />
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
      </main>
    </div>
  );
}
