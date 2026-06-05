const toggleAgentStatus = async (agentId: number) => {
  const res = await fetch(
    `/api/agents/${agentId}/toggle-status`,

    {
      method: "POST",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to toggle status");
  }

  return res.json();
};

export default toggleAgentStatus;
