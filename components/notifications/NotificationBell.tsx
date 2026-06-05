"use client";

import { Bell } from "lucide-react";
import { useState } from "react";

import NotificationDropdown from "./NotificationDropdown";

type Props = {
  notifications: any[];
};

export default function NotificationBell({ notifications }: Props) {
  const [open, setOpen] = useState(false);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="relative">
        <Bell size={22} />

        {unreadCount > 0 && (
          <span
            className="
              absolute
              -top-2
              -right-2
              bg-red-500
              text-white
              rounded-full
              text-xs
              px-2
            "
          >
            {unreadCount}
          </span>
        )}
      </button>

      {open && <NotificationDropdown notifications={notifications} />}
    </div>
  );
}
