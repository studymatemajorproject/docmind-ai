import { ChatSidebar } from "@/components/chat/chat-sidebar";
import { ChatWindow } from "@/components/chat/chat-window";

export default function DashboardPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <ChatSidebar />
      <ChatWindow />
    </div>
  );
}