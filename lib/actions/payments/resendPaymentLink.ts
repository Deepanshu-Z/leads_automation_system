const resendPaymentLink = async (paymentId: number) => {
  const res = await fetch(
    `/api/payments/${paymentId}/resend`,

    {
      method: "POST",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to resend link");
  }
  console.log("IS IT FAILED??::", res);
  return res.json();
};

export default resendPaymentLink;
