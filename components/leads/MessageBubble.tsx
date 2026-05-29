import ConfidenceBadge from "./ConfidenceBadge";

export default function MessageBubble({ message }: any) {
  const isUser = message.role === "USER";

  const isAI = message.role === "AI";

  const isAgent = message.role === "AGENT";

  return (
    <div className={`flex mb-4 ${isUser ? "justify-start" : "justify-end"}`}>
      <div
        className={`
          max-w-md
          rounded-lg
          px-4
          py-3

          ${
            isUser
              ? "bg-gray-200"
              : isAI
                ? "bg-blue-500 text-white"
                : "bg-green-500 text-white"
          }
        `}
      >
        <p>{message.content}</p>

        {isAI && (
          <ConfidenceBadge
            intent={message.intent}
            confidence={message.confidence}
          />
        )}
      </div>
    </div>
  );
}
