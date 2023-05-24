import { defineStore } from "pinia";
import { usePlanetsStore } from "./modules/planet";
import { useNotificationStore } from "./modules/notification";
import { useFavorisStore } from "./modules/favoris";

export const useStore: any = defineStore("store", () => {
  const planet = usePlanetsStore();
  const notifications = useNotificationStore();
  const favoris = useFavorisStore();

  return { planet, notifications, favoris };
});
