import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="container mx-auto py-32 text-center">
          <h1 className="text-5xl font-bold">
            Learn Smarter with AI
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Upload PDFs, chat with documents, generate summaries,
            flashcards, quizzes, and much more.
          </p>
        </section>
      </main>
    </>
  );
}