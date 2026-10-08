import {
  Brain,
  FileText,
  MessageSquare,
  BookOpen,
  Sparkles,
  Shield,
} from "lucide-react";

import FeatureCard from "./feature-card";

const features = [
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Upload PDFs",
    description: "Upload books, research papers, notes and documents.",
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Chat with PDFs",
    description: "Ask questions and receive instant AI answers.",
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "AI Tutor",
    description: "Learn concepts with step-by-step explanations.",
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Flashcards",
    description: "Generate flashcards automatically from PDFs.",
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Smart Summaries",
    description: "Create concise summaries of chapters and books.",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Secure Storage",
    description: "Your documents are stored securely in the cloud.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="container mx-auto grid gap-6 px-4 py-20 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </section>
  );
}