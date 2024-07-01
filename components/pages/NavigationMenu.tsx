"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Education",
    href: "/docs/primitives/alert-dialog",
    description:
      "Education helps a person to get knowledge and improve confidence in life.",
  },
  {
    title: "Help for Women",
    href: "/docs/primitives/hover-card",
    description:
      "Pope helps to improve Women career life and their rights in society ",
  },
  {
    title: "Help for Youth",
    href: "/docs/primitives/progress",
    description:
      "The youth of today are the leaders of tomorrow.",
  },
  {
    title: "Help for Elderly People",
    href: "/docs/primitives/scroll-area",
    description: "To care for those , who once cared for us.",
  },
  {
    title: "Health",
    href: "/docs/primitives/tabs",
    description:
      "Pope helps in people health and hospitaity.",
  },
  {
    title: "Others",
    href: "/docs/primitives/tooltip",
    description:
      "A more works and empowerment process is going in pope.",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/Pages/About/pope/" 
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Pope India
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    POPE is a registered non-profit making secular voluntary organisation.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/Pages/About/Environment/" title="Environment">
                The places where pope organisation do their job.
              </ListItem>
              <ListItem href="/Pages/About/visionmissionmoto/" title="Vision, Mission & Moto">
                Our work and process to improve this society.
              </ListItem>
              <ListItem href="/Pages/About/Objectives/" title="Objectives & Main Activities">
               A Devolopment process and Social events
              </ListItem>
              <ListItem href="/Pages/About/dalit/" title="The Dalit">
                Marginalized People in Hindu caste society.
              </ListItem>
              <ListItem href="/Pages/About/tribes/" title="The Tribes">
                A category of Human Social Group Who need Improvement in their life.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Our Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
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
  )
})
ListItem.displayName = "ListItem"
