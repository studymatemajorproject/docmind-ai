import Link from "next/link";

export default function CTA() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="rounded-3xl bg-primary px-8 py-20 text-center text-primary-foreground">
        <h2 className="text-5xl font-bold">
          Ready to Learn Smarter?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg opacity-90">
          Join thousands of students using AI to study faster,
          understand better and achieve more.
        </p>

        <Link
          href="/sign-up"
          className="mt-10 inline-flex rounded-xl bg-background px-8 py-4 font-semibold text-foreground transition hover:scale-105"
        >
          Get Started Free
        </Link>
      </div>
    </section>
  );
}