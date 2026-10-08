import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AuthCard({ children }: Props) {
  return (
    <div className="rounded-2xl border bg-card p-8 shadow-lg">
      {children}
    </div>
  );
}