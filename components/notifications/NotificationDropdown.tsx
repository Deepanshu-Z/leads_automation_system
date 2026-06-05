"use client";

import NotificationItem from "./NotificationItem";

type Props = {
  notifications: any[];
};

export default function NotificationDropdown({ notifications }: Props) {
  return (
    <div
      className="
        absolute
        right-0
        mt-2
        w-96
        bg-white
        border
        rounded-xl
        shadow-lg
        z-50
      "
    >
      <div
        className="
          p-3
          border-b
          font-semibold
        "
      >
        Notifications
      </div>

      <div
        className="
          max-h-96
          overflow-y-auto
        "
      >
        {notifications.length === 0 ? (
          <div className="p-4">No notifications</div>
        ) : (
          notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
            />
          ))
        )}
      </div>
    </div>
  );
}
