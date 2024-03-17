"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const componentsCategories: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Ads",
    href: "/docs/primitives/alert-dialog",
    description: "Find the perfect ad format. Search, display, social & more.",
  },
  {
    title: "Email",
    href: "/docs/primitives/hover-card",
    description:
      "Craft emails that convert. Subject lines, sequences & newsletters.",
  },
  {
    title: "Landing Page",
    href: "/docs/primitives/progress",
    description:
      "Find high-converting landing pages that capture leads and drive sales.",
  },
  {
    title: "Website Copy",
    href: "/docs/primitives/scroll-area",
    description: "Write winning website copy. Craft ones that sells.",
  },
  {
    title: "Social Media",
    href: "/docs/primitives/tabs",
    description:
      "Explore content that gets shared on LinkedIn, Twitter, and Facebook.",
  },
  {
    title: "Content Marketing",
    href: "/docs/primitives/tooltip",
    description: "Find inspiration from case studies, white papers, etc.",
  },
];

const componentsIndustries: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "MarTech",
    href: "/docs/primitives/alert-dialog",
    description: "Distinguish yourself in the crowded martech landscape.",
  },
  {
    title: "FinTech",
    href: "/docs/primitives/hover-card",
    description: "Communicate financial products with confidence.",
  },
  {
    title: "HR Tech",
    href: "/docs/primitives/progress",
    description: "Simplify complex HR messaging and positioning.",
  },
  {
    title: "Dev Tools",
    href: "/docs/primitives/scroll-area",
    description: "Explain your technical solutions effortlessly.",
  },
  {
    title: "Sales Tech",
    href: "/docs/primitives/tabs",
    description: "Showcase the value of your sales tools.",
  },
  {
    title: "Cyber Security",
    href: "/docs/primitives/tooltip",
    description: "Communicate safety and security with complexity.",
  },
];

const componentsFunnel: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Awareness",
    href: "/docs/primitives/alert-dialog",
    description: "Learn from successful campaigns proven to scale.",
  },
  {
    title: "Acquistion",
    href: "/docs/primitives/hover-card",
    description: "Find proven tactics that drive traffic and generate leads.",
  },
  {
    title: "Activation",
    href: "/docs/primitives/progress",
    description: "Guide your users to their first 'aha' moment quickly.",
  },
  {
    title: "Retention",
    href: "/docs/primitives/scroll-area",
    description: "Discover strategies to nurture loyalty and reduce churn.",
  },
  {
    title: "Revenue",
    href: "/docs/primitives/tabs",
    description:
      "Explore upselling, cross-selling, and pricing optimization techniques.",
  },
  {
    title: "Referral",
    href: "/docs/primitives/tooltip",
    description: "Incentivize referrals and leverage word-of-mouth marketing.",
  },
];

const componentsResources: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Guides & Tutorials",
    href: "/docs/primitives/alert-dialog",
    description: "Step-by-step guides for successful marketing campaigns.",
  },
  {
    title: "Tools & Software",
    href: "/docs/primitives/hover-card",
    description: "Find recommendations and reviews of essential softwares.",
  },
  {
    title: "Templates",
    href: "/docs/primitives/scroll-area",
    description: "Discover strategies to nurture loyalty and reduce churn.",
  },
  {
    title: "Glossary",
    href: "/docs/primitives/tabs",
    description:
      "Find quick definitions and explanations for essential marketing terms.",
  },
  {
    title: "Blogs",
    href: "/docs/primitives/tooltip",
    description: "Explore in-depth and opinionated articles.",
  },
  {
    title: "About Us",
    href: "/docs/primitives/tooltip",
    description: "Learn why we created the B2B marketing swipefile.",
  },
];

export function PrimaryNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {componentsCategories.map((component) => (
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
          <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {componentsIndustries.map((component) => (
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
          <NavigationMenuTrigger>Funnel Stage</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {componentsFunnel.map((component) => (
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
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {componentsResources.map((component) => (
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
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
