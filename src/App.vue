<template>
  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DefaultLayout from "./layout/Default.vue";
import { RouterView } from "vue-router";

export default defineComponent({
  name: "App",
  components: {
    DefaultLayout,
    RouterView,
  },
});
</script>
