"use client";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ExternalLink } from "lucide-react";
import { Navitems } from "../../data/nav-sidebar-contets";

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {Navitems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavItem
              textContent={item.title}
              pathName={item.href}
              isLink={item.href !== "#"}
              isTrigger={item.subItems.length > 0}
            />
            {item.subItems.length > 0 &&
              (item.title === "Home" ? (
                <NavigationMenuContent>
                  <ul className="grid gap-[0.18rem] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] font-(family-name:--font-abhya) ">
                    {item.subItems.map((component, index) =>
                      index === 0 ? (
                        <li className="row-span-3" key={component.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              className="to-[#6985b6] from-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b   no-underline outline-hidden select-none focus:shadow-md text-white!"
                              href={component.href}
                            >
                              <div className="lg:text-[1.5rem] md:text-[1.4rem] font-semibold leading-none pt-[0.45rem] pb-[0.34rem] pl-[0.3romrem]">
                                {component.title}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ) : (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      )
                    )}
                  </ul>
                </NavigationMenuContent>
              ) : (
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-[0.18rem] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {item.subItems.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              ))}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  const path = usePathname();
  return (
    <li {...props}>
      <NavigationMenuLink asChild className={cn(path === href && "bg-accent")}>
        <Link
          href={href}
          className="flex flex-row justify-between items-center group data-[active=true]:hidden"
        >
          <div className="text-[1.4rem] font-(family-name:--font-abhya) leading-none font-medium">
            {title}
          </div>
          <ExternalLink className="h-5! w-5! opacity-0 group-hover:opacity-100 transition-opacity duration-100 text-brand" />
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

function NavItem({
  textContent,
  pathName,
  className,
  isLink,
  isTrigger,
}: {
  textContent: string;
  pathName: string;
  className?: string;
  isLink: boolean;
  isTrigger: boolean;
}) {
  const CurrentPath = usePathname();
  // const notHomePath = path !== "/";
  const TriggCn =
    "lg:text-[1.1rem]! md:text-[1rem]! text-[0.8rem]! hover:underline! underline-offset-4 bg-transparent!";
  return isTrigger ? (
    <NavigationMenuTrigger
      className={cn(
        CurrentPath.startsWith(pathName) &&
          pathName !== "/" &&
          "underline underline-offset-4",
        CurrentPath === "/" &&
          CurrentPath === pathName &&
          "underline underline-offset-4",

        TriggCn,
        className
      )}
    >
      {isLink ? (
        <Link href={pathName}>{textContent}</Link>
      ) : (
        <span>{textContent}</span>
      )}
    </NavigationMenuTrigger>
  ) : (
    <NavigationMenuLink
      asChild
      className={cn(
        CurrentPath == pathName && "underline underline-offset-4",
        TriggCn,
        navigationMenuTriggerStyle(),
        className
      )}
    >
      <Link href={pathName}>{textContent}</Link>
    </NavigationMenuLink>
  );
}
