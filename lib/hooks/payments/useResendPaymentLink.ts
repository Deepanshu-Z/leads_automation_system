import resendPaymentLink from "@/lib/actions/payments/resendPaymentLink";
import { useMutation } from "@tanstack/react-query";

import { useQueryClient } from "@tanstack/react-query";

export function useResendPaymentLink() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: resendPaymentLink,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["payments"],
      });
    },
  });
}
