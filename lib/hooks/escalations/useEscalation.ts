import fetchEscalations from "@/lib/actions/fetch/escalations/fetchEscalation";
import { useQuery } from "@tanstack/react-query";

export function useEscalations() {
  return useQuery({
    queryKey: ["escalations"],

    queryFn: fetchEscalations,

    refetchInterval: 5000,
  });
}
