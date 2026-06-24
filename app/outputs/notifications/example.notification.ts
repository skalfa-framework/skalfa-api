import { notification } from "@utils";

export async function ExampleNotification(userIds: number[], payload: Record<string, any>) {
  await notification.send({
    title: payload.title || "New Notification",
    body: payload.body || "You have received a new notification.",
    type: payload.type || "info",
    userIds,
  });
}
