<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { Planet } from "@/interfaces/planet.interface";
import { useStore } from "@/stores";
import FavouriteItem from "@/components/favourites/FavouriteItem.vue";

const store = useStore();
const planets = ref([] as Planet[]);

onMounted(() => {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    keys.push(localStorage.key(i));
  }
  planets.value = store.planet.getPlanetsByIds(keys);
});

function remove(id: string) {
  localStorage.removeItem(id);

  const planetName = planets.value.find((p) => p.id === id);

  // Remove from favorites notification
  store.notifications.addNotification({
    type: "warning",
    title: "Suppression des favoris",
    message: `Suppression de ${planetName?.name ?? "undefined"} des favoris`
  });

  planets.value = planets.value.filter((p) => p.id !== id);
}
</script>

<template>
  <h1 class="text-3xl font-semibold mb-4">Favoris</h1>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
    <template v-for="p in planets" :key="p.id">
      <FavouriteItem :planet="p" @remove="remove(p.id)" />
    </template>
  </div>
</template>
