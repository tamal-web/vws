import {
  // Calendar,
  Home,
  // Inbox,
  // Search,
  // Settings,
  InfoIcon,
  ContactIcon,
  ChevronDownIcon,
} from "lucide-react";
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  // SidebarGroupLabel,
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
// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
    subItems: [
      {
        title: "Our Mission",
        url: "/about/mission",
      },
      {
        title: "Our Belief",
        url: "/about/belief",
      },
      {
        title: "Our Impact",
        url: "/about/impact",
      },
      {
        title: "Our Core Team",
        url: "/about/team",
      },
      {
        title: "Our Future Plans",
        url: "/about/plan",
      },
      {
        title: "FAQs",
        url: "/about/faq",
      },
    ],
  },
  {
    title: "About",
    url: "/about",
    icon: InfoIcon,
    subItems: [
      {
        title: "Our Work",
        url: "about/work",
      },
      {
        title: "Events",
        url: "/event",
      },
      {
        title: "Get Involved",
        url: "/get-involved",
      },
      {
        title: "How can You Help",
        url: "/get-involved/help",
      },
    ],
  },
  {
    title: "Contact",
    url: "/contact",
    icon: ContactIcon,
    subItems: [],
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Image
          src={"/img/logo/FullLogoNgo.png"}
          alt="Logo"
          width={3571}
          height={1131}
          sizes="auto"
          className="md:w-[13rem] w-[12.5rem] h-auto relative mt-[2rem]"
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
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
                      >
                        <Link
                          className={cn(item.subItems.length === 0 && "flex-1")}
                          href={item.url}
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
                            <SidebarMenuSubItem key={subItem.title}>
                              <Link href={subItem.url}>{subItem.title}</Link>
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
        <div className="w-full flex justify-center items-center">
          {" "}
          <VDButton />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
