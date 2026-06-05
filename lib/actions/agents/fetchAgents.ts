const fetchAgents = async () => {
  const res = await fetch("/api/agents");

  if (!res.ok) {
    throw new Error("Failed to fetch agents");
  }

  const data = await res.json();
  console.log("Fetched agents:", data);
  return data.agents;
};

export default fetchAgents;
