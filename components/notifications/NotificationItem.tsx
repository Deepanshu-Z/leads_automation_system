"use client";

import { useMarkNotificationRead } from "@/lib/hooks/notifications/useNotificationRead";
import Link from "next/link";

type Props = {
  notification: any;
};

export default function NotificationItem({ notification }: Props) {
  const markRead = useMarkNotificationRead();

  return (
    <Link
      href={`/dashboard/leads/${notification.leadId}`}
      onClick={() => markRead.mutate(notification.id)}
    >
      <div
        className={`
          p-4
          border-b
          hover:bg-gray-50

          ${!notification.isRead ? "bg-blue-50" : ""}
        `}
      >
        <div
          className="
            font-medium
          "
        >
          {notification.title}
        </div>

        <div
          className="
            text-sm
            text-gray-600
          "
        >
          {notification.message}
        </div>
      </div>
    </Link>
  );
}
