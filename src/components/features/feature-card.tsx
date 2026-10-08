import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: Props) {
  return (
    <div className="rounded-2xl border bg-card p-6 transition hover:shadow-lg">
      <div className="mb-4">{icon}</div>

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}