<script setup lang="ts">
import NavBar from "@/components/layouts/header/NavBar.vue";
</script>

<template>
  <section class="min-h-screen bg-slate-900">
    <NavBar></NavBar>
    <div class="p-6 pt-20 md:pb-12 md:px-12 md:pt-24 lg:px-16 xl:px-20">
      <RouterView />
    </div>
  </section>
</template>

<style scoped></style>
