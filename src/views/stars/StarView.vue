<script setup lang="ts">
import { ref } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import { useStore } from "@/stores";
import { storeToRefs } from "pinia";
import type { Planet } from "@/interfaces/planet.interface";

const store = useStore();
const notifications = store.notifications;
const { getPlanetById } = storeToRefs(store.planet);

const route = useRoute();
const star = ref(getPlanetById.value(route.params.id) as Planet);

const icon = ref(
  localStorage.getItem(star.value.id)
    ? "../src/assets/icons/heart-solid.svg"
    : "../src/assets/icons/heart-regular.svg"
);

function toggleFavorite() {
  if (localStorage.getItem(star.value.id)) {
    localStorage.removeItem(star.value.id);
    icon.value = "../src/assets/icons/heart-regular.svg";

    // Remove from favorites notification
    notifications.addNotification({
      type: "warning",
      title: "Suppression des favoris",
      message: `Suppression de ${star.value.name} des favoris`
    });
  } else {
    localStorage.setItem(star.value.id, star.value.id);
    icon.value = "../src/assets/icons/heart-solid.svg";

    // Add to favorites notification
    notifications.addNotification({
      type: "success",
      title: "Ajout aux favoris",
      message: `Ajout de ${star.value.name} aux favoris`
    });
  }
}

onBeforeRouteUpdate((to) => {
  star.value = getPlanetById.value(to.params.id);
});
</script>

<template>
  <template v-if="!star">
    <h1 class="text-3xl">Aucun astre trouvé</h1>
  </template>

  <template v-else>
    <div class="flex items-center gap-4">
      <h1 class="text-3xl">{{ star.name }}</h1>
      <img :src="icon" class="w-6 h-6 my-6 cursor-pointer" @click="toggleFavorite" />
    </div>

    <div class="grid grid-cols-4 gap-4">
      <div class="bg-slate-700 p-3 rounded-lg col-span-2">
        <p>Nom anglais: {{ star.englishName }}</p>
        <p>Type: {{ star.bodyType }}</p>

        <br />

        <p>discoveredBy: {{ star.discoveredBy }}</p>
        <p>discoveryDate: {{ star.discoveryDate }}</p>
        <p>alternativeName: {{ star.alternativeName }}</p>
        <p>axialTilt: {{ star.axialTilt }}</p>
        <p>avgTemp: {{ star.avgTemp }}</p>
        <p>mainAnomaly: {{ star.mainAnomaly }}</p>
        <p>argPeriapsis: {{ star.argPeriapsis }}</p>
        <p>longAscNode: {{ star.longAscNode }}</p>
      </div>

      <div class="bg-slate-700 p-3 rounded-lg">
        <p>semimajorAxis: {{ star.semimajorAxis }}</p>
        <p>perihelion: {{ star.perihelion }}</p>
        <p>aphelion: {{ star.aphelion }}</p>
        <p>eccentricity: {{ star.eccentricity }}</p>
        <p>inclination: {{ star.inclination }}</p>

        <div v-if="star.mass">
          <p>massExponent: {{ star.mass.massExponent }}</p>
          <p>massValue: {{ star.mass.massValue }}</p>
        </div>

        <div v-if="star.vol">
          <p>volExponent: {{ star.vol.volExponent }}</p>
          <p>volValue: {{ star.vol.volValue }}</p>
        </div>
      </div>

      <div class="bg-slate-700 p-3 rounded-lg">
        <p>density: {{ star.density }}</p>
        <p>gravity: {{ star.gravity }}</p>
        <p>escape: {{ star.escape }}</p>
        <p>meanRadius: {{ star.meanRadius }}</p>
        <p>equaRadius: {{ star.equaRadius }}</p>
        <p>polarRadius: {{ star.polarRadius }}</p>
        <p>flattening: {{ star.flattening }}</p>
        <p>dimension: {{ star.dimension }}</p>
        <p>sideralOrbit: {{ star.sideralOrbit }}</p>
        <p>sideralRotation: {{ star.sideralRotation }}</p>
      </div>

      <div
        v-if="star.aroundPlanet"
        class="flex justify-between items-center bg-slate-700 p-3 rounded-lg col-span-4"
      >
        <p>Tourne autour: {{ star.aroundPlanet.planet }}</p>
        <RouterLink
          :to="'/stars/' + star.aroundPlanet.planet"
          class="bg-slate-500 flex items-center rounded-full p-2"
        >
          <img src="@/assets/icons/rocket.svg" />
        </RouterLink>
      </div>

      <div v-if="star.moons" class="bg-slate-700 p-3 rounded-lg col-span-4">
        <h3 class="text-lg font-semibold mb-3">Lunes:</h3>
        <div class="flex flex-col gap-2">
          <div
            v-for="moon in star.moons"
            :key="moon.moon"
            class="flex justify-between items-center rounded p-2 bg-slate-600"
          >
            <p>{{ moon.moon }}</p>
            <RouterLink
              :to="
                '/stars/' + moon.rel.replace('https://api.le-systeme-solaire.net/rest/bodies/', '')
              "
              class="bg-slate-500 flex items-center rounded-full p-2"
            >
              <img src="@/assets/icons/rocket.svg" />
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>
