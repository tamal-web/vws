interface NavItem {
  title: string;
  href: string;
  subItems: { title: string; href: string; description: string }[];
}

export const Navitems: NavItem[] = [
  {
    title: "Home",
    href: "/",
    subItems: [
      {
        title: "Events",
        href: "/events",
        description: "",
      },
      {
        title: "Get Involved",
        href: "/get-involved",
        description: "",
      },
      {
        title: "How can You Help",
        href: "/get-involved/help",
        description: "",
      },
    ],
  },
  {
    title: "About Us",
    href: "/about",
    subItems: [
      {
        title: "Our Mission",
        href: "/about/mission",
        description: "",
      },
      {
        title: "Our Beliefs",
        href: "/about/belief",
        description: "",
      },
      {
        title: "Our Impact",
        href: "/about/impact",
        description: "",
      },
      {
        title: "Our Core Team",
        href: "/about/team",
        description: "",
      },
      {
        title: "Our Future Plans",
        href: "/about/plan",
        description: "",
      },
      {
        title: "Our Privileges",
        href: "/about/privilege",
        description: "",
      },
    ],
  },
  {
    title: "Contact",
    href: "/contact",
    subItems: [],
  },
];
