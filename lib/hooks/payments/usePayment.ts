import fetchPayments from "@/lib/actions/payments/fetchPayment";
import { useQuery } from "@tanstack/react-query";

export function usePayments(status: string) {
  return useQuery({
    queryKey: ["payments", status],

    queryFn: () =>
      fetchPayments({
        status,
      }),

    staleTime: 60000,
  });
}
