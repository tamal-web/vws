import React from "react";
import TopSection from "@/app/comp/section/top-section";
import TextBoxSection from "@/app/comp/section/textbox-section";
import { cn } from "@/lib/utils";

export default function Mission() {
  return (
    <div className="w-full">
      <main
        className={cn(
          "w-full lg:px-[6.5rem md:px-[2.8rem px-[2rem",
          "px-[clamp(1.8rem,6.4vw,6.8rem)] md:px-[clamp(1.8rem,6.2vw,6.8rem)] px-[1.8rem]"
        )}
      >
        {" "}
        <TopSection title="Our Mission" />
        <TextBoxSection title="Our Mission">
          At Vrinda Welfare Society, our mission is simple yet powerful — to
          bring hope, dignity, and opportunity to every individual, especially
          those left unseen and unheard.
          <br />
          <br />
          We are a community-driven non-profit organization dedicated to
          uplifting the underprivileged by focusing on education, healthcare,
          women empowerment, and environmental sustainability. Our work is
          rooted in compassion, guided by service, and fueled by the belief that
          small efforts can spark big change.
        </TextBoxSection>
      </main>
    </div>
  );
}
