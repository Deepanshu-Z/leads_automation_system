"use client";
export default function Page() {
  const toggleBot = async () => {
    const res = await fetch(
      "/api/toggle-bot",

      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          senderId: "917292057858",
        }),
      },
    );

    const data = await res.json();

    console.log(data);
  };

  return (
    <div>
      <button
        onClick={() => toggleBot()}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Toggle Bot
      </button>
    </div>
  );
}
