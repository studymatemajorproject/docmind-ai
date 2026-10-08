import Link from "next/link";

const links = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Features", href: "/features" },
  { name: "Docs", href: "/docs" },
  { name: "About", href: "/about" },
];

export default function Navigation() {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-sm font-medium transition hover:text-primary"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}