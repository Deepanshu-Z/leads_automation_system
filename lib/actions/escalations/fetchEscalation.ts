const fetchEscalations = async () => {
  const res = await fetch("/api/escalations");

  if (!res.ok) {
    throw new Error("Failed to fetch escalations");
  }

  const data = await res.json();
  console.log("Fetched escalations:", data.escalations);
  return data.escalations;
};

export default fetchEscalations;
