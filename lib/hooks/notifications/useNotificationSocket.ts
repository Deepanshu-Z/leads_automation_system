import { useEffect } from "react";
import { socket } from "@/lib/socket/client";
import { useQueryClient } from "@tanstack/react-query";

export function useNotificationSocket(agentId: number) {
  const queryClient = useQueryClient();

  useEffect(() => {
    socket.connect();

    socket.emit("join-agent-room", agentId);

    socket.on(
      "notification:new",

      () => {
        queryClient.invalidateQueries({
          queryKey: ["notifications"],
        });
      },
    );

    return () => {
      socket.off("notification:new");

      socket.disconnect();
    };
  }, [agentId]);
}
