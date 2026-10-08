import { Check, X } from "lucide-react";

const rows: [string, boolean, boolean][] = [
  ["AI Chat", true, false],
  ["Unlimited PDFs", true, false],
  ["Flashcards", true, false],
  ["MCQ Generator", true, false],
  ["Research Assistant", true, false],
  ["Cloud Sync", true, false],
];

export default function Comparison() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          Why Choose DocMind AI
        </h2>

        <p className="mt-3 text-muted-foreground">
          More powerful than a traditional PDF reader.
        </p>
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="p-5 text-left">Feature</th>
              <th className="p-5">DocMind AI</th>
              <th className="p-5">PDF Reader</th>
            </tr>
          </thead>

          <tbody>
            {rows.map(([feature, ours, theirs]) => (
              <tr key={feature} className="border-t">
                <td className="p-5">{feature}</td>

                <td className="text-center">
                  {ours ? (
                    <Check className="mx-auto text-green-500" />
                  ) : (
                    <X className="mx-auto text-red-500" />
                  )}
                </td>

                <td className="text-center">
                  {theirs ? (
                    <Check className="mx-auto text-green-500" />
                  ) : (
                    <X className="mx-auto text-red-500" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}