import { Bot, User } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ChatInput } from "./chat-input";

export function ChatWindow() {
  return (
    <main className="flex min-w-0 flex-1 flex-col">
      {/* Header */}
      <header className="flex h-16 items-center border-b px-6">
        <div>
          <h1 className="font-semibold">New Chat</h1>
          <p className="text-xs text-muted-foreground">
            Ask questions about your documents
          </p>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-8">
          {/* Welcome */}
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <Bot className="h-7 w-7" />
            </div>

            <h2 className="text-2xl font-semibold">
              How can I help you learn?
            </h2>

            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Upload a PDF and ask questions, generate summaries, create
              revision notes, or prepare for your exams.
            </p>
          </div>

          {/* Example user message */}
          <div className="flex gap-3">
            <Avatar className="h-8 w-8">
              <AvatarFallback>
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>

            <div className="pt-1">
              <p className="text-sm font-medium">You</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Explain the main concepts in this document.
              </p>
            </div>
          </div>

          {/* Example AI message */}
          <div className="flex gap-3">
            <Avatar className="h-8 w-8">
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>

            <div className="pt-1">
              <p className="text-sm font-medium">DocMind AI</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Upload your PDF and I&apos;ll analyze its content and explain
                the important concepts with references to the relevant pages.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Input */}
      <ChatInput />
    </main>
  );
}