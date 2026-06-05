import createAgent from "@/lib/actions/agents/createAgent";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

export function useCreateAgent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createAgent,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["agents"],
      });
    },
  });
}
