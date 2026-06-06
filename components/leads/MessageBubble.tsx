import ConfidenceBadge from "./ConfidenceBadge";
import { User, Bot, UserCheck } from "lucide-react";

export default function MessageBubble({ message }: any) {
  const isUser = message.role === "USER";
  const isAI = message.role === "AI";
  const isAgent = message.role === "AGENT";

  const timeString = message.createdAt
    ? new Date(message.createdAt).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;

  return (
    <div className={`flex mb-5 items-end gap-2.5 ${isUser ? "justify-start" : "justify-end"}`}>
      {/* Avatar icon */}
      {isUser && (
        <div className="h-7 w-7 rounded-full bg-muted border border-border flex items-center justify-center text-muted-foreground shrink-0 select-none">
          <User size={13} />
        </div>
      )}

      <div className="flex flex-col max-w-[70%]">
        {/* Role label banner */}
        {!isUser && (
          <span className="text-[10px] font-bold text-muted-foreground tracking-wider mb-1 flex items-center gap-1 self-end uppercase">
            {isAI ? (
              <>
                <Bot size={11} className="text-primary" />
                AI Assistant
              </>
            ) : (
              <>
                <UserCheck size={11} className="text-emerald-500" />
                Agent
              </>
            )}
          </span>
        )}

        {/* Chat Bubble container */}
        <div
          className={`
            rounded-2xl
            px-4
            py-2.5
            text-sm
            shadow-sm
            border
            relative
            ${
              isUser
                ? "bg-secondary/40 text-foreground border-border rounded-tl-sm"
                : isAI
                  ? "bg-primary text-primary-foreground border-primary/10 rounded-tr-sm"
                  : "bg-emerald-600 text-white border-emerald-500/10 rounded-tr-sm"
            }
          `}
        >
          <p className="leading-relaxed whitespace-pre-wrap select-text">{message.content}</p>

          {/* AI Confidence badge */}
          {isAI && (
            <ConfidenceBadge
              intent={message.intent}
              confidence={message.confidence}
            />
          )}

          {/* Optional inline small timestamp */}
          {timeString && (
            <div
              className={`
                text-[9px]
                mt-1.5
                text-right
                opacity-60
                font-medium
                ${isUser ? "text-muted-foreground" : "text-white/85"}
              `}
            >
              {timeString}
            </div>
          )}
        </div>
      </div>

      {/* Avatar icon on right */}
      {!isUser && (
        <div
          className={`h-7 w-7 rounded-full flex items-center justify-center text-white shrink-0 select-none ${
            isAI ? "bg-primary shadow-sm" : "bg-emerald-600 shadow-sm"
          }`}
        >
          {isAI ? <Bot size={13} /> : <UserCheck size={13} />}
        </div>
      )}
    </div>
  );
}
