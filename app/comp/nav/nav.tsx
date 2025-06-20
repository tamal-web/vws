import { NavigationMenuDemo } from "./NavigationComp";
import VDButton from "./VDButton";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Nav() {
  return (
    <>
      <div className="hidden md:flex w-full px-[5rem] py-[1rem] flex-row items-center justify-between sticky top-0 bg-bg! z-[9]">
        <div className="flex flex-row items-center">
          <NavigationMenuDemo />
        </div>
        <VDButton />
      </div>

      <div className="md:hidden flex w-full px-[1rem] py-[0.4rem] flex-row items-center justify-between sticky top-0 bg-bg! z-[9] border-b-brown border-b">
        <div className="flex flex-row items-center">
          {/* <NavigationMenuDemo /> */}
          <SidebarTrigger />
        </div>
        <VDButton />
      </div>
    </>
  );
}
