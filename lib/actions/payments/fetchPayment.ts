type Props = {
  status?: string;
};

const fetchPayments = async ({ status }: Props) => {
  const params = new URLSearchParams();

  if (status) {
    params.set("status", status);
  }

  const res = await fetch(`/api/payments?${params}`);

  if (!res.ok) {
    throw new Error("Failed to fetch payments");
  }

  return res.json();
};

export default fetchPayments;
