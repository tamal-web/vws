"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import BrandLink from "../brand-comp/brand-link";
import { projects } from "@/app/data/projects";
import { Project } from "@/app/types/content";
import { useState } from "react";

export default function ProjectSection({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "mt-[5.2rem] flex flex-col items-stretch justify-center",
        className
      )}
    >
      <div className="flex flex-row justify-between items-center mb-[1.9rem]">
        <h1 className="heading font-body  tracking-tight">Our projects</h1>
        <BrandLink
          path="/projects"
          text="See More"
          className="hover:brand-primary transform hover:scale-110 transition duration-150 ease-in-out"
        />
      </div>
      <div className=" overflow-x-scroll  no-scrollbar">
        <div className="lg:h-[27rem] md:h-[21rem] flex flex-col md:flex-row md:items-stretch items-center justify-start  gap-[1.6rem] md:flex-nowrap flex-wrap">
          {projects["ImpactPage"].map((project, index) => (
            <Card project={project} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);
  if (project.contents[0].title == "") return;

  return (
    <div
      className="max-w-[90%] shrink-0 overflow-hidden group brand-box hover:bg-brown hover:text-white  transition-all duration-150 ease-in-out border-2 rounded-[1.3rem] md:h-auto h-[21rem] lg:w-[21rem] w-[17rem] p-2 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={project.contents[0].image?.src || "/img/logo/NgoLogoBlue.png"}
        alt={project.contents[0].image?.alt || "image alt not present"}
        height={project.contents[0].image?.height}
        width={project.contents[0].image?.width}
        sizes="auto"
        className="-z-20 w-full rounded-[0.8rem] lg:h-[15rem] h-[11rem] group-hover:h-full object-cover transition-all ease-in-out duration-150"
      />
      <div
        className="group-hover:absolute bottom-2 left-2 right-2 rounded-b-[0.8rem] p-[0.8rem] group-hover:pt-[1.6rem] transition-all ease-in-out duration-150 group-hover:backdrop-blur-sm"
        style={
          isHovered
            ? {
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.6) 100%)",
                WebkitMask:
                  "linear-gradient(to bottom, transparent 0%, black 40%, black 100%)",
                mask: "linear-gradient(to bottom, transparent 0%, black 20%, black 100%)",
              }
            : {}
        }
      >
        <h1 className="font-(family-name:--font-abhya) lg:text-[1.8rem] md:text-[1.5rem] text-[1.4rem] lg:pt-[0.95rem] mt-[0.1rem] pt-[0.3rem] group-hover:pt-0 pb-[0.3rem] font-bold leading-none z-[9999999]! ">
          {project.contents[0].title}
        </h1>
        <div className="text-[0.95rem] font-(family-name:--font-abhya) leading-[1.2rem] max-h-[5rem] overflow-y-hidden!">
          {project.contents[0].children}
        </div>
      </div>
    </div>
  );
}
