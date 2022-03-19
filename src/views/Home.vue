<template>
  <Default :titleMenuName="titleMenuName">
    <div>
      <h1>This is the Home Page</h1>
    </div>
  </Default>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Default from "../layout/Default.vue";

export default defineComponent({
  name: "Home",
  data: () => ({
    titleMenuName: "Dashboard",
  }),
  components: {
    Default,
  },
});
</script>
