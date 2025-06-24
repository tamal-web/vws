import Image from "next/image";
import { cn } from "@/lib/utils";
import { Project } from "@/app/types/content";
export default function ContentBoxSection({ contents }: Project) {
  return (
    <div className="brand-box w-full flex flex-col items-center justify-start ">
      {contents.map((content, index) => (
        <div
          className={cn(
            content.image?.alt === "logo" ? " flex-row" : "flex-col",
            "brand-box-content w-full px-[0rem] md:px-0 flex md:flex-row md:items-stretch items-center justify-center",
            index !== 0 &&
              content.image?.alt !== "logo" &&
              content.image?.alt !== "svg" &&
              "mt-[2.2rem]",
            (content.image?.alt === "logo" || content.image?.alt === "svg") &&
              "mt-[2.2rem] md:mt-0"
          )}
          key={index}
        >
          {content.image ? (
            <Image
              src={content.image.src}
              alt={content.image.alt}
              height={content.image.height}
              width={content.image.width}
              sizes="auto"
              className={cn(
                "lg:w-[32%] md:w-[32%] w-aut",
                index % 2 === 0 ? "md:order-1" : "md:order-2",
                content.image.alt === "logo"
                  ? "object-contain max-h-[13.2rem]"
                  : "object-cover min-h-[13rem]",
                content.image.alt == "svg" &&
                  "max-h-[18rem] w-auto object-contain!"
              )}
            />
          ) : (
            content.title && (
              <h1
                className={cn(
                  index % 2 === 0 ? "md:order-1" : "md:order-2",
                  "lg:w-[26%] md:w-[26%] text-[3rem] leading-none self-start font-(family-name:--font-abhya)! font-bold"
                )}
              >
                {content.title}
              </h1>
            )
          )}

          <div
            className={cn(
              index % 2 === 0 ? "md:order-2" : "md:order-1",
              content.image || content.title ? "md:w-[60%]" : "lg:px-[5rem]",
              "flex flex-col items-start justify-center gap-[0.8rem]"
            )}
          >
            {content.image && content.title && (
              <h1
                className={cn(
                  "lg:text-[clamp(1.8rem,3.9vw,3.6rem)]! md:text-[clamp(1.8rem,4.5vw,2.8rem)]! text-[1.8rem] font-body leading-none"
                )}
              >
                {content.title}
              </h1>
            )}
            <div className="font-(family-name:--font-abhya) desc">
              {" "}
              {content.children}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
