const faqs = [
  {
    question: "Can I upload multiple PDFs?",
    answer:
      "Yes. You can upload and chat with multiple PDFs at the same time.",
  },
  {
    question: "Does AI remember previous chats?",
    answer:
      "Yes. Your conversations are saved so you can continue anytime.",
  },
  {
    question: "Can I generate quizzes?",
    answer:
      "Yes. Generate MCQs, flashcards, summaries and study notes instantly.",
  },
];

export default function FAQ() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="mx-auto mt-12 max-w-4xl space-y-6">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-2xl border p-6"
          >
            <h3 className="text-lg font-semibold">
              {faq.question}
            </h3>

            <p className="mt-2 text-muted-foreground">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}