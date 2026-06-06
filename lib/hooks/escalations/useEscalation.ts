import fetchEscalations from "@/lib/actions/escalations/fetchEscalation";
import { useQuery } from "@tanstack/react-query";

export function useEscalations() {
  return useQuery({
    queryKey: ["escalations"],

    queryFn: fetchEscalations,
    //to be updated
    refetchInterval: 50000,
  });
}
