import TopSection from "@/app/comp/section/top-section";
export default function AboutPage() {
  return (
    <div className="w-screen">
      <TopSection title={"About Us"} />
      <TextSection />
    </div>
  );
}

function TextSection() {
  return (
    <div className="w-full pt-[4rem]">
      <div className="w-full lg:px-[4rem] md:px-[2.5rem] px-[1.1rem] flex flex-col items-start justify-start gap-[1rem] md:grid md:grid-cols-3 md:items-center md:gap- mx-auto">
        <div className="flex-1] text-[2.5rem] font-heading font-[600]">
          About Us{" "}
        </div>
        <div className="flex-2] font-heading text-[1.2rem] col-span-2">
          Vrinda Welfare Society was founded to address gaps in healthcare,
          education, and livelihood opportunities across rural Punjab. Our
          registered office is at SCO No. 4, Kalsia Square, VIP Road, Zirakpur
          (140603). Since inception, we’ve been committed to serving society’s
          most vulnerable—orphans, disaster‑affected families, persons with
          disabilities, and the economically disadvantaged—without any
          discrimination .
        </div>
        <div className="flex-1] text-[2.5rem] font-heading font-[600]">
          What We Believe{" "}
        </div>
        <div className="flex-2] font-heading text-[1.2rem] col-span-2">
          <ul>
            <li>
              Universal Access: Every individual deserves quality education,
              healthcare, and vocational training.
            </li>
            <li>
              Non‑Discrimination: Progress flourishes when we uplift communities
              regardless of caste, creed, religion, or economic status.
            </li>
            <li>
              Holistic Development: True well‑being spans moral, spiritual,
              physical, and mental dimensions. Community
            </li>
            <li>
              Empowerment: Informed, engaged citizens drive lasting change.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
