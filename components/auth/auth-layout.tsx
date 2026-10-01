import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
}

export default function AuthLayout({
  children,
  title,
  description,
}: AuthLayoutProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">DocMind AI</h1>

          <h2 className="mt-6 text-2xl font-semibold">
            {title}
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            {description}
          </p>
        </div>

        {children}
      </div>
    </main>
  );
}