import fetchAgents from "@/lib/actions/agents/fetchAgents";
import { useQuery } from "@tanstack/react-query";

export function useAgents() {
  return useQuery({
    queryKey: ["agents"],

    queryFn: fetchAgents,

    refetchInterval: 5000,
  });
}
