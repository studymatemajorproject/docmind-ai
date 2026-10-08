import Navbar from "@/components/navbar/navbar";
import {
  FileText,
  MessageSquare,
  Sparkles,
  Brain,
} from "lucide-react";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Navbar />

      <main className="flex flex-1 flex-col">
        {/* Hero */}
        <section className="flex flex-1 items-center justify-center px-6">
          <div className="w-full max-w-5xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border bg-muted/40 px-3 py-1.5 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4" />
              AI-powered PDF learning
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Learn Smarter with{" "}
              <span className="text-primary">DocMind AI</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Turn your PDFs into an interactive learning experience.
              Ask questions, understand difficult topics, and prepare
              for your exams faster.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex items-center justify-center gap-3">
              {user ? (
                <a
                  href="/dashboard"
                  className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                >
                  Dashboard
                </a>
              ) : (
                <>
                  <a
                    href="/sign-up"
                    className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                  >
                    Get Started
                  </a>

                  <a
                    href="/sign-in"
                    className="rounded-md border px-6 py-3 text-sm font-medium transition hover:bg-muted"
                  >
                    Sign In
                  </a>
                </>
              )}
            </div>

            {/* Features */}
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-xl border bg-background/60 p-4">
                <FileText className="mx-auto h-5 w-5 text-primary" />
                <h3 className="mt-3 text-sm font-semibold">
                  Upload PDFs
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Learn directly from your documents.
                </p>
              </div>

              <div className="rounded-xl border bg-background/60 p-4">
                <MessageSquare className="mx-auto h-5 w-5 text-primary" />
                <h3 className="mt-3 text-sm font-semibold">
                  Ask Questions
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Chat with your documents.
                </p>
              </div>

              <div className="rounded-xl border bg-background/60 p-4">
                <Brain className="mx-auto h-5 w-5 text-primary" />
                <h3 className="mt-3 text-sm font-semibold">
                  Understand
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Get simple AI explanations.
                </p>
              </div>

              <div className="rounded-xl border bg-background/60 p-4">
                <Sparkles className="mx-auto h-5 w-5 text-primary" />
                <h3 className="mt-3 text-sm font-semibold">
                  Study Faster
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Notes, quizzes and revision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mini Footer */}
        <footer className="border-t px-6 py-3">
          <div className="mx-auto flex max-w-6xl items-center justify-between text-xs text-muted-foreground">
            <span>© 2026 DocMind AI</span>
            <span>AI Workspace for Intelligent PDF Learning</span>
          </div>
        </footer>
      </main>
    </div>
  );
}