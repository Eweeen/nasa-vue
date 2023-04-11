<script setup lang="ts">
import type { Planet } from "@/interfaces/planet.interface";
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";
import { useStore } from "@/stores";
import { ref } from "vue";

const store = useStore().planet;
const planets = ref(store.getPlanets as Planet[]);
const showFilters = ref(false);

let isPlanet = ref(undefined as boolean | undefined);
let haveMoons = ref(false);

function filter() {
  let filteredPlanets: Planet[] = store.getPlanets;

  if (isPlanet.value !== undefined) {
    filteredPlanets = filteredPlanets.filter((p) => p.isPlanet === isPlanet.value);
  }
  if (haveMoons.value) {
    filteredPlanets = filteredPlanets.filter((p) => p.moons);
  }

  planets.value = filteredPlanets;
}

function reset() {
  isPlanet.value = undefined;
  haveMoons.value = false;
  planets.value = store.getPlanets;
}
</script>

<template>
  <div class="flex justify-between items-center">
    <h1 class="text-3xl font-semibold mb-4">Astres</h1>
    <img
      src="@/assets/icons/filter-solid.svg"
      class="w-5 h-5 cursor-pointer"
      @click="showFilters = !showFilters"
    />
  </div>

  <Transition name="dropDown">
    <div v-if="showFilters">
      <div
        class="bg-slate-800 p-4 rounded-lg mb-6 overflow-hidden flex justify-between items-center"
      >
        <div class="flex gap-6 ml-6">
          <SwitchGroup>
            <div class="flex gap-2">
              <Switch
                v-model="isPlanet"
                :class="isPlanet ? 'bg-blue-600' : 'bg-gray-400'"
                class="relative inline-flex h-6 w-11 items-center rounded-full"
              >
                <span
                  :class="isPlanet ? 'translate-x-6' : 'translate-x-1'"
                  class="inline-block h-4 w-4 transform rounded-full bg-white transition"
                ></span>
              </Switch>
              <SwitchLabel>Is planet</SwitchLabel>
            </div>
          </SwitchGroup>

          <SwitchGroup>
            <div class="flex gap-2">
              <Switch
                v-model="haveMoons"
                :class="haveMoons ? 'bg-blue-600' : 'bg-gray-400'"
                class="relative inline-flex h-6 w-11 items-center rounded-full"
              >
                <span
                  :class="haveMoons ? 'translate-x-6' : 'translate-x-1'"
                  class="inline-block h-4 w-4 transform rounded-full bg-white transition"
                ></span>
              </Switch>
              <SwitchLabel>Have moons</SwitchLabel>
            </div>
          </SwitchGroup>
        </div>

        <div class="flex gap-3">
          <button class="bg-slate-600 py-1 px-5 rounded" @click="reset">Reset</button>
          <button class="bg-slate-600 py-1 px-5 rounded" @click="filter">Valider</button>
        </div>
      </div>
    </div>
  </Transition>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
    <template v-for="p in planets" :key="p.id">
      <div class="flex justify-between items-center bg-slate-700 py-3 px-5 rounded-lg">
        <div>
          <h3 class="font-semibold">{{ p.name }}</h3>
          <p class="text-sm text-gray-200">Type: {{ p.bodyType }}</p>
        </div>
        <RouterLink
          :to="'/stars/' + p.id"
          class="bg-slate-500 hover:bg-slate-600 p-3 rounded-full flex justify-center items-center"
        >
          <img src="@/assets/icons/astronaut-solid.svg" class="w-5 h-5" />
        </RouterLink>
      </div>
    </template>
  </div>
</template>

<style scoped>
.dropDown-enter-active {
  animation: dropDown 0.5s;
}
.dropDown-leave-active {
  animation: dropDown 0.5s reverse;
}

@keyframes dropDown {
  0% {
    max-height: 0px;
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    max-height: 200px;
    opacity: 1;
  }
}
</style>
