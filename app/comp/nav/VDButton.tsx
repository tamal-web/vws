"use client";
import { BrandButton } from "@/app/comp/brand-comp/brand-button";
import { useRouter } from "next/navigation";

export default function VDButton() {
  const router = useRouter();
  return (
    <div className="border-1 border-brand rounded-0">
      <BrandButton
        onClick={() => router.push("/get-involved/volunteer")}
        variant={"brandPrimary"}
      >
        Volunteer
      </BrandButton>
      <BrandButton onClick={() => router.push("/get-involved/donate")}>
        Donate
      </BrandButton>
    </div>
  );
}
