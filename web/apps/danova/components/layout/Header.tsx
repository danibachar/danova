"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import { SITE } from "@/lib/constants";

const navItems = [
  {
    label: "Our Services",
    href: "/services",
    children: [
      { label: "Interior Painting", href: "/services/interior-painting" },
      { label: "Exterior Painting", href: "/services/exterior-painting" },
      { label: "Commercial Painting", href: "/services/commercial-painting" },
      { label: "Flooring Installation", href: "/services/flooring" },
      { label: "Popcorn Ceiling Removal", href: "/services/popcorn-ceiling-removal" },
      { label: "Wallpaper Removal", href: "/services/wallpaper-removal" },
      { label: "Drywall Repair", href: "/services/drywall-repair" },
    ],
  },
  {
    label: "Service Area",
    href: "/service-area",
  },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-xl font-bold text-primary">
            {SITE.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) =>
            item.children ? (
              <DropdownMenu key={item.href}>
                <DropdownMenuTrigger asChild>
                  <button
                    className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary"
                    aria-label={`Open ${item.label} menu`}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.href} asChild>
                      <Link href={child.href}>{child.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary"
              >
                {item.label}
              </Link>
            )
          )}
          <Button asChild size="sm">
            <Link href="/estimate">Contact Us</Link>
          </Button>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t md:hidden">
          <nav className="container mx-auto flex flex-col gap-2 px-4 py-4">
            {navItems.map((item) => (
              <div key={item.href}>
                {item.children ? (
                  <div className="flex flex-col gap-1">
                    <span className="px-2 py-1 text-sm font-semibold text-muted-foreground">
                      {item.label}
                    </span>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-md px-4 py-2 text-sm hover:bg-muted"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Button asChild className="mt-2">
              <Link href="/estimate" onClick={() => setMobileOpen(false)}>
                Contact Us
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
