<script setup lang="ts">
import NavBar from "@/components/layouts/NavBar.vue";
import FooterComponent from "@/components/layouts/FooterComponent.vue";
import Notifications from "@/components/Notifications.vue";
</script>

<template>
  <section class="min-h-screen bg-slate-900">
    <NavBar />
    <div class="p-6 pt-20 md:pb-12 md:px-12 md:pt-24 lg:px-16 xl:px-20">
      <RouterView />
    </div>
  </section>
  <FooterComponent />

  <Notifications />
</template>
