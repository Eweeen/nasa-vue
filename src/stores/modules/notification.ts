import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";

class ToastMessage {
  type: "success" | "info" | "warning" | "error";
  title: string;
  message: string;
  duration: number;
  uuid: string;
  timer: any;

  constructor(type: "success" | "info" | "warning" | "error", title: string, message: string) {
    this.type = type;
    this.title = title;
    this.message = message;
    this.duration = 5000;
    this.uuid = uuid();

    this.timer = setTimeout(() => {
      useNotificationStore().removeNotification(this.uuid);
    }, this.duration);
  }
}

interface NotificationState {
  messages: ToastMessage[];
}

interface AddToast {
  type: "success" | "info" | "warning" | "error";
  title: string;
  message: string;
}

export const useNotificationStore = defineStore("notifications", {
  state: () => ({
    messages: []
  }),
  getters: {
    getNotifications(state: NotificationState) {
      return state.messages;
    }
  },
  actions: {
    addNotification(notification: AddToast) {
      this.messages.push(
        new ToastMessage(notification.type, notification.title, notification.message)
      );
    },
    removeNotification(id: string) {
      this.messages.splice(
        this.messages.findIndex((t) => t.uuid === id),
        1
      );
    }
  }
});
