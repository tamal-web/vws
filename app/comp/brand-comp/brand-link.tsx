import React from "react";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BrandLink({
  text,
  path,
  className,
}: {
  text?: string;
  path: string;
  className?: string;
}) {
  return (
    <Link
      href={path}
      className={cn(
        " text-[clamp(0.98rem,1.6vw,1.5rem)] font-body border  rounded-[10rem] flex flex-row items-center justify-center font-semibold px-[1.4rem] py-[0.8rem]  border-inherit  ",
        className
      )}
    >
      {text || "Know More"}

      <MoveUpRight className="ml-[0.6rem]" />
    </Link>
  );
}
