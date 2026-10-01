"use client";

import Link from "next/link";

import Logo from "./logo";
import Navigation from "./navigation";
import ThemeToggle from "./theme-toggle";
import MobileMenu from "./mobile-menu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Left */}
        <div className="flex items-center gap-3">
          <MobileMenu />
          <Logo />
        </div>

        {/* Center */}
        <Navigation />

        {/* Right */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Link
            href="/sign-in"
            className="hidden rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-muted md:inline-flex"
          >
            Sign In
          </Link>

          <Link
            href="/sign-up"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}