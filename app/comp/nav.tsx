"use client";

import { NavigationMenuDemo } from "./NavigationComp";

import VDButton from "./VDButton";

export default function Nav() {
  return (
    <div className="w-full px-[5rem] py-[1rem] flex flex-row items-center justify-between sticky top-0 bg-bg! z-[9999999]">
      <div className="flex flex-row items-center">
        <NavigationMenuDemo />
      </div>

      <VDButton />
    </div>
  );
}
