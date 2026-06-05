type CreateAgentInput = {
  name: string;
  email: string;
  password: string;
  role: string;
};

const createAgent = async (data: CreateAgentInput) => {
  const res = await fetch("/api/agents", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to create agent");
  }

  return res.json();
};

export default createAgent;
