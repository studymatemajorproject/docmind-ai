"use client";

import {
  FileText,
  MessageSquare,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  LogOut,
} from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { createClient } from "@/lib/supabase/client";

const chats = [
  {
    id: 1,
    title: "DBMS Notes",
  },
  {
    id: 2,
    title: "Operating System Chapter 3",
  },
  {
    id: 3,
    title: "Artificial Intelligence",
  },
  {
    id: 4,
    title: "Computer Networks",
  },
];

export function ChatSidebar() {
  const router = useRouter();
  const supabase = createClient();

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/sign-in");
    router.refresh();
  }

  return (
    <aside className="flex h-screen w-72 flex-col border-r bg-muted/30">
      {/* Header */}
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <FileText className="h-4 w-4" />
          </div>

          <span className="text-lg font-semibold">DocMind AI</span>
        </div>
      </div>

      {/* New Chat */}
      <div className="px-3">
        <Button className="w-full justify-start gap-2" size="sm">
          <Plus className="h-4 w-4" />
          New Chat
        </Button>
      </div>

      {/* Search */}
      <div className="px-3 py-3">
        <Button
          variant="outline"
          className="w-full justify-start gap-2 text-muted-foreground"
        >
          <Search className="h-4 w-4" />
          Search chats
        </Button>
      </div>

      <Separator />

      {/* Chat history */}
      <div className="px-4 pb-2 pt-4">
        <p className="text-xs font-medium text-muted-foreground">
          Recent chats
        </p>
      </div>

      <ScrollArea className="flex-1 px-2">
        <div className="space-y-1">
          {chats.map((chat) => (
            <Button
              key={chat.id}
              variant="ghost"
              className="group w-full justify-start gap-2 font-normal"
            >
              <MessageSquare className="h-4 w-4 shrink-0 text-muted-foreground" />

              <span className="truncate">{chat.title}</span>

              <MoreHorizontal className="ml-auto hidden h-4 w-4 shrink-0 text-muted-foreground group-hover:block" />
            </Button>
          ))}
        </div>
      </ScrollArea>

      {/* Bottom */}
      <div className="p-3">
        <Separator className="mb-3" />

        {/* Settings */}
        <Button
          variant="ghost"
          className="w-full justify-start gap-2 font-normal"
        >
          <Settings className="h-4 w-4" />
          Settings
        </Button>

        {/* Logout */}
        <Button
          variant="ghost"
          onClick={handleLogout}
          className="mt-1 w-full justify-start gap-2 font-normal text-muted-foreground hover:text-destructive"
        >
          <LogOut className="h-4 w-4" />
          Log out
        </Button>
      </div>
    </aside>
  );
}