import toggleAgentStatus from "@/lib/actions/agents/toggleAgentStatus";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

export function useToggleAgentStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleAgentStatus,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["agents"],
      });
    },
  });
}
