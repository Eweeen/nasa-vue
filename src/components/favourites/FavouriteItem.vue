<script setup lang="ts">
import type { PropType } from "vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import type { Planet } from "@/interfaces/planet.interface";

defineEmits(["remove"]);

defineProps({
  planet: {
    type: Object as PropType<Planet>,
    required: true
  }
});
</script>

<template>
  <div class="flex justify-between items-center bg-slate-700 py-3 px-5 rounded-lg">
    <div>
      <h3 class="font-semibold">{{ planet.name }}</h3>
      <p class="text-sm text-gray-200">Type: {{ planet.bodyType }}</p>
    </div>

    <Menu as="div" class="relative">
      <MenuButton
        class="bg-slate-500 hover:bg-slate-600 p-2 rounded-full flex justify-center items-center"
      >
        <img src="@/assets/icons/ellipsis-solid.svg" class="w-5 h-5" />
      </MenuButton>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems class="absolute right-0 w-max bg-slate-600 p-1 rounded-lg flex flex-col gap-1">
          <MenuItem as="div">
            <RouterLink
              :to="'/stars/' + planet.id"
              class="bg-slate-500 p-2 rounded-lg flex justify-center items-center gap-2"
            >
              Voir
              <img src="@/assets/icons/astronaut-solid.svg" class="w-5 h-5" />
            </RouterLink>
          </MenuItem>
          <MenuItem
            as="div"
            class="bg-slate-500 p-2 rounded-lg flex justify-center items-center gap-2 cursor-pointer"
            @click="$emit('remove')"
          >
            Supprimer des favoris
            <img src="@/assets/icons/heart-solid.svg" class="w-5 h-5" />
          </MenuItem>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<style scoped></style>
