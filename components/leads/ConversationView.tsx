import MessageBubble from "./MessageBubble";

export default function ConversationView({ messages }: any) {
  return (
    <div
      className="
        border
        rounded-xl
        bg-white
        p-4
        h-[700px]
        overflow-y-auto
      "
    >
      {messages?.map((message: any) => (
        <MessageBubble key={message.id} message={message} />
      ))}
    </div>
  );
}
