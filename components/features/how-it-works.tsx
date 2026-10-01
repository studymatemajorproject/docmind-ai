import { Upload, MessageSquareText, Sparkles } from "lucide-react";

const steps = [
  {
    icon: <Upload className="h-10 w-10" />,
    title: "Upload Your PDF",
    description:
      "Upload books, lecture notes, research papers or any PDF document.",
  },
  {
    icon: <MessageSquareText className="h-10 w-10" />,
    title: "Ask AI Questions",
    description:
      "Chat naturally with your documents and receive accurate answers instantly.",
  },
  {
    icon: <Sparkles className="h-10 w-10" />,
    title: "Study Smarter",
    description:
      "Generate summaries, notes, quizzes and flashcards in seconds.",
  },
];

export default function HowItWorks() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="text-center">
        <h2 className="text-4xl font-bold">How It Works</h2>
        <p className="mt-3 text-muted-foreground">
          Three simple steps to start learning.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="rounded-2xl border bg-card p-8 text-center"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              {step.icon}
            </div>

            <div className="mb-4 text-sm font-semibold text-primary">
              Step {index + 1}
            </div>

            <h3 className="text-xl font-semibold">
              {step.title}
            </h3>

            <p className="mt-3 text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}