<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const links = [
  { name: "Astres", to: "/stars" },
  { name: "Système solaire", to: "/solar-system" },
  { name: "Favoris", to: "/favorites" }
];

const showNavBar = ref(false);

function handleScroll() {
  if (window.scrollY > 0) {
    document.querySelector("nav")?.classList.add("background");
  } else {
    document.querySelector("nav")?.classList.remove("background");
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav
    class="w-full p-4 md:py-6 md:px-12 fixed z-50 flex justify-between items-center border-b border-transparent"
  >
    <h1 class="text-4xl font-semibold uppercase">
      <RouterLink to="/" @click="showNavBar = false">Space</RouterLink>
    </h1>

    <!-- Nav Desktop -->
    <ul class="hidden lg:flex gap-20">
      <RouterLink
        v-for="l in links"
        :key="l.name"
        :to="l.to"
        class="border-b-2 border-transparent hover:border-slate-700 transition duration-300"
      >
        <li>{{ l.name }}</li>
      </RouterLink>
    </ul>

    <!-- Nav Mobile -->
    <div class="lg:hidden w-6 h-6 cursor-pointer" @click="showNavBar = !showNavBar">
      <img src="@/assets/icons/bars-solid.svg" />
    </div>

    <Transition name="show">
      <div
        v-if="showNavBar"
        class="lg:hidden absolute left-0 right-0 top-[100%] h-screen bg-slate-800 py-20 px-12"
      >
        <ul class="flex flex-col items-center gap-6">
          <RouterLink
            v-for="l in links"
            :key="l.name"
            :to="l.to"
            class="bg-slate-700 w-full py-3 px-6 rounded-lg text-center"
            @click="showNavBar = false"
          >
            <li class="text-2xl font-semibold">{{ l.name }}</li>
          </RouterLink>
        </ul>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.background {
  background-color: #1e293b;
  border-bottom: 1px solid #334155;
}

.show-enter-active {
  animation: show-nav 0.3s ease-in-out;
}
.show-leave-active {
  animation: show-nav 0.3s ease-in-out reverse;
}

@keyframes show-nav {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
