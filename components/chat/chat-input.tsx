"use client";

import { Paperclip, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function ChatInput() {
  return (
    <div className="border-t bg-background p-4">
      <div className="mx-auto flex max-w-3xl items-end gap-2 rounded-2xl border bg-background p-2 shadow-sm">
        <Button
          variant="ghost"
          size="icon"
          className="shrink-0"
          aria-label="Attach file"
        >
          <Paperclip className="h-5 w-5" />
        </Button>

        <Textarea
          placeholder="Ask anything about your PDF..."
          className="max-h-40 min-h-11 resize-none border-0 shadow-none focus-visible:ring-0"
        />

        <Button size="icon" className="shrink-0" aria-label="Send message">
          <Send className="h-4 w-4" />
        </Button>
      </div>

      <p className="mt-2 text-center text-xs text-muted-foreground">
        DocMind AI can make mistakes. Verify important information.
      </p>
    </div>
  );
}