type LeadsType = {
  page: number;
  search: string;
  status: string;
  platform: string;
  setLeads: React.Dispatch<React.SetStateAction<any[]>>;
};

const fetchleads = async ({
  page,
  search,
  status,
  platform,
  setLeads,
}: LeadsType) => {
  const params = new URLSearchParams({
    page: String(page),

    search,

    status,

    platform,
  });

  const res = await fetch(`/api/leads?${params}`);

  if (!res.ok) {
    console.error("Failed to fetch leads:", res.statusText);
    throw new Error("Failed to fetch leads");
  }

  const data = await res.json();
  setLeads(data.data);
  return data;
};

export default fetchleads;
