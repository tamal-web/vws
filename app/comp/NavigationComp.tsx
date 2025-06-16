"use client";

import * as React from "react";
import Link from "next/link";
// import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";
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

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {/* <NavTrigger
            className={cn(
              pathName === "/" && "underline underline-offset-4",
              "hover:underline! bg-transparen hover:bg-transparent!"
            )}
            textContent="Home"
            pathName=""
          /> */}
          <NavTrigger textContent="Home" pathName="/" />
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Beautifully designed components built with Tailwind CSS.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavTrigger textContent="About Us" pathName="/about" />
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
          {/* <NavigationMenuLink
            asChild
            className={cn(
              pathName === "/contact" && "underline underline-offset-4",
              "text-[1.rem hover:underline! underline-offset-4 bg-transparent!",
              navigationMenuTriggerStyle()
            )}
          >
            <Link href="/contact">Contact</Link>
          </NavigationMenuLink> */}
          <NavLink textContent="Contact" pathName="/contact" />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

function NavTrigger({
  textContent,
  pathName,
  className,
}: {
  textContent: string;
  pathName: string;
  className?: string;
}) {
  const path = usePathname();
  return (
    <NavigationMenuTrigger
      className={cn(
        path === pathName && "underline underline-offset-4",
        "text-[1.1rem] hover:underline! underline-offset-4 bg-transparent! hover:text-black!",
        className
      )}
    >
      {textContent}
    </NavigationMenuTrigger>
  );
}

export function NavLink({
  textContent,
  pathName,
  className,
}: {
  textContent: string;
  pathName: string;
  className?: string;
}) {
  const path = usePathname();
  return (
    <NavigationMenuLink
      asChild
      className={cn(
        path === pathName && "underline underline-offset-4",
        "text-[1.1rem]! hover:underline! underline-offset-4 bg-transparent! hover:text-black! active:text-black! focus:text-black! focus-visible:text-black! focus-within:text-black! not-hover:text-black ",
        navigationMenuTriggerStyle(),
        className
      )}
    >
      <Link href={pathName}>{textContent}</Link>
    </NavigationMenuLink>
  );
}
