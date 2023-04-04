<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  mounted() {
    fetch("https://api.le-systeme-solaire.net/rest/bodies/")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
});
</script>

<template>
  <div>Home</div>
</template>

<style scoped></style>
