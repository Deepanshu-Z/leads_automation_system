import assignEscalation from "@/lib/actions/escalations/assignEscalation";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

export function useAssignEscalation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: assignEscalation,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["escalations"],
      });

      queryClient.invalidateQueries({
        queryKey: ["escalation-count"],
      });
    },
  });
}
