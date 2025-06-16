"use client";
// import Image from "next/image";
import { NavigationMenuDemo } from "./NavigationComp";
// import { usePathname } from "next/navigation";
import VDButton from "./VDButton";

export default function Nav() {
  // const pathName = usePathname();

  // console.log(pathName);
  return (
    <div className="w-full px-[5rem] py-[1rem] flex flex-row items-center justify-between border- fixed top-0 bg-bg!">
      <div className="flex flex-row items-center">
        <NavigationMenuDemo />
      </div>
      {/* <div className="absolute top-[1rem] left-[50%] transform translate-x-[-50%]">
        <Image
          src={"/logos/NgoLogoBlue.png"}
          alt="Logo"
          width={150}
          height={0}
          className="h-auto relative mt-[2rem]"
        />
      </div> */}
      <VDButton />
    </div>
  );
}
