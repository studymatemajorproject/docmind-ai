"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

const links = [
  { name: "Home", href: "/" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Docs", href: "#docs" },
  { name: "About", href: "#about" },
];

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger
  render={<Button variant="ghost" size="icon" className="md:hidden" />}
>
  <Menu className="h-5 w-5" />
</SheetTrigger>

      <SheetContent side="left">
        <div className="mt-8 flex flex-col gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}