const markNotificationRead = async (notificationId: number) => {
  const res = await fetch(
    `/api/notifications/${notificationId}/read`,

    {
      method: "POST",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to mark notification read");
  }

  return res.json();
};

export default markNotificationRead;
