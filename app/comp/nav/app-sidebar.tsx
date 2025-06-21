"use client";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import VDButton from "./VDButton";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Navitems } from "./nav-sidebar-contets";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  const pathName = usePathname();
  return (
    <Sidebar>
      <SidebarHeader>
        <Link href={"/"}>
          <Image
            src={"/img/logo/FullLogoNgo.png"}
            alt="Logo"
            width={3571}
            height={1131}
            sizes="auto"
            className="md:w-[13rem] w-[12.5rem] h-auto relative mt-[2rem] ml-[0.6rem]"
          />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {Navitems.map((item) => (
                <Collapsible
                  defaultOpen
                  className="group/collapsible"
                  key={item.title}
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        className={cn(
                          item.subItems.length === 0 && "flex flex-row",
                          "flex flex-row justify-between items-center"
                        )}
                        isActive={item.href === pathName}
                      >
                        <Link
                          className={cn(item.subItems.length === 0 && "flex-1")}
                          href={item.href}
                        >
                          <span>{item.title}</span>
                        </Link>
                        {item.subItems.length !== 0 && <ChevronDownIcon />}
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      {item.subItems.length !== 0 && (
                        <SidebarMenuSub>
                          {item.subItems.map((subItem) => (
                            <SidebarMenuSubItem
                              key={subItem.title}
                              className={cn(
                                subItem.href === pathName &&
                                  "underline underline-offset-2 decoration-black"
                              )}
                            >
                              <Link href={subItem.href}>{subItem.title}</Link>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      )}
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="w-full flex justify-center items-center pb-[2rem]">
          {" "}
          <VDButton />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
