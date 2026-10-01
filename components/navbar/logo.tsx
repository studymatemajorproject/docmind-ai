import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-lg">
        D
      </div>

      <div>
        <h1 className="text-lg font-bold leading-none">
          DocMind AI
        </h1>
        <p className="text-xs text-muted-foreground">
          Intelligent PDF Learning
        </p>
      </div>
    </Link>
  );
}