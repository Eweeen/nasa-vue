<script setup lang="ts">
import type { Planet } from "@/interfaces/planet.interface";
import { usePlanetsStore } from "@/stores";

const store = usePlanetsStore();
const planets: Planet[] = store.getSolarSystem;
</script>

<template>
  <h1 class="text-4xl font-bold text-red-500 text-center my-16">Bienvenue dans l'espace</h1>

  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 lg:gap-4">
    <template v-for="p in planets" :key="p.name">
      <RouterLink
        :to="'/stars/' + p.id"
        class="m-auto flex flex-col items-center gap-2 mb-4 cursor-pointer"
      >
        <div
          class="hover:bg-gradient-to-br from-[#ff665c] to-[#7023cb] backdrop-blur-lg w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] rounded-2xl flex justify-center items-center shadow-[inset_0_4px_6px_0_rgb(255,255,255,0.5),inset_0_-1px_6px_0_rgb(255,255,255,0.5)]"
        >
          <img
            :src="`src/assets/icons/${p.id}.png`"
            alt="image planète"
            class="w-20 h-20 lg:w-24 lg:h-24"
          />
        </div>
        <span class="text-xl font-semibold">{{ p.name }}</span>
      </RouterLink>
    </template>
  </div>
</template>

<style scoped></style>
