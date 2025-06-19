import { NavigationMenuDemo } from "./NavigationComp";
import VDButton from "./VDButton";

export default function Nav() {
  return (
    <>
      <div className="hidden md:flex w-full px-[5rem] py-[1rem] flex-row items-center justify-between sticky top-0 bg-bg! z-[9999999]">
        <div className="flex flex-row items-center">
          <NavigationMenuDemo />
        </div>
        <VDButton />
      </div>

      <div className="md:hidden flex w-full px-[1rem] py-[0.4rem] flex-row items-center justify-between sticky top-0 bg-bg! z-[9999999]">
        <div className="flex flex-row items-center">
          {/* <NavigationMenuDemo /> */}
        </div>
        <VDButton />
      </div>
    </>
  );
}
