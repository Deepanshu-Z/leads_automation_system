const assignEscalation = async (escalationId: number) => {
  const res = await fetch(`/api/escalations/${escalationId}/assign`, {
    method: "POST",
  });

  if (!res.ok) {
    throw new Error("Failed to assign escalation");
  }

  return res.json();
};

export default assignEscalation;
