import { defineStore } from "pinia";
import { usePlanetsStore } from "./modules/planet";
import { useNotificationStore } from "./modules/notification";

export const useStore: any = defineStore("store", () => {
  const planet = usePlanetsStore();
  const notifications = useNotificationStore();

  return { planet, notifications };
});
