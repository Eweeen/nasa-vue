import { createRouter, createWebHistory } from "vue-router";
import Main from "@/views/MainComponent.vue";
import Home from "@/views/HomeView.vue";
import Stars from "@/views/stars/StarsList.vue";
import Star from "@/views/stars/StarView.vue";
import SolarSystem from "@/views/SolarSystem.vue";
import MyFavorites from "@/views/MyFavorites.vue";
import { useStore } from "@/stores";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: Main,
      children: [
        {
          path: "/",
          name: "home",
          component: Home
        },
        {
          path: "/stars",
          name: "stars",
          component: Stars
        },
        {
          path: "/stars/:id",
          name: "star",
          component: Star
        },
        {
          path: "/solar-system",
          name: "solar-system",
          component: SolarSystem
        },
        {
          path: "/favorites",
          name: "favorites",
          component: MyFavorites
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  const store = useStore().planet;

  if (store.getPlanets.length > 0) next();

  fetch("https://api.le-systeme-solaire.net/rest/bodies/")
    .then((response) => response.json())
    .then((data) => {
      store.setPlanets(data.bodies);
      next();
    });
});

export default router;
