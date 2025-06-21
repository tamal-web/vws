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

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Our Mission",
    href: "/about/mission",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Our Beliefs",
    href: "/about/belief",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Our Impact",
    href: "/about/impact",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Our Core Team",
    href: "/about/team",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Our Future Plans",
    href: "/about/plan",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Privileges",
    href: "/about/privilege",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavItem
            textContent="Home"
            pathName="/"
            isLink={true}
            isTrigger={true}
          />
          <NavigationMenuContent>
            <ul className="grid gap-[0.18rem] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="to-[#6985b6] from-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b   no-underline outline-hidden select-none focus:shadow-md text-white!"
                    href="/about/work"
                  >
                    <div className="mt-[] mb-[] font-(family-name:--font-abhya) lg:text-[1.5rem] md:text-[1.4rem] font-semibold leading-none pb-[0.34rem] pl-[0.3romrem]">
                      Our Work
                    </div>
                    {/* <p className="text-brand text-sm leading-tight">
                      Beautifully designed components built with Tailwind CSS.
                    </p> */}
                  </Link>
                </NavigationMenuLink>
              </li>

              <ListItem href="/events" title="Events"></ListItem>
              <ListItem href="/get-involved" title="Get Involved"></ListItem>
              <ListItem
                href="/get-involved/help"
                title="How can You Help"
              ></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavItem
            textContent="About Us"
            pathName="/about"
            isLink={true}
            isTrigger={true}
          />
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-[0.18rem] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
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
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavItem
            textContent="Contact"
            pathName="/contact"
            isLink={true}
            isTrigger={false}
          />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="flex flex-row justify-between items-center group"
        >
          <div className="text-[1.4rem] font-(family-name:--font-abhya) leading-none font-medium">
            {title}
          </div>
          <ExternalLink className="h-5! w-5! opacity-0 group-hover:opacity-100 transition-opacity duration-100 text-brand" />

          {/* <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p> */}
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
  const path = usePathname();
  const TriggCn =
    "lg:text-[1.1rem]! md:text-[1rem]! text-[0.8rem]! hover:underline! underline-offset-4 bg-transparent!";
  return isTrigger ? (
    <NavigationMenuTrigger
      className={cn(
        path === pathName && "underline underline-offset-4",
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
        path === pathName && "underline underline-offset-4",
        TriggCn,
        navigationMenuTriggerStyle(),
        className
      )}
    >
      <Link href={pathName}>{textContent}</Link>
    </NavigationMenuLink>
  );
}
