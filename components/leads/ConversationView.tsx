import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

export default function ConversationView({ messages }: any) {
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of conversation
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      className="
        border
        border-border
        rounded-xl
        bg-card
        p-5
        h-[650px]
        overflow-y-auto
        flex
        flex-col
        relative
      "
    >
      {messages && messages.length > 0 ? (
        <div className="flex-1">
          {messages.map((message: any) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          <div ref={bottomRef} />
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground p-6 text-center">
          <div className="h-10 w-10 rounded-full border border-dashed flex items-center justify-center mb-3">
            ✉️
          </div>
          <p className="text-sm font-semibold">No messages yet</p>
          <p className="text-xs opacity-70 mt-1">Send a message or wait for incoming client chats.</p>
        </div>
      )}
    </div>
  );
}
