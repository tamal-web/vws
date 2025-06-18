import { BrandButton } from "@/app/comp/brand-button";

export default function VDButton() {
  return (
    <div className="border-1 border-brand rounded-0">
      <BrandButton variant={"brandPrimary"}>Volunter</BrandButton>
      <BrandButton>Donate</BrandButton>
    </div>
  );
}
