<template>
  <TopNavBar :titleMenuName="titleMenuName"/>
  <div>
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
  
  import { defineComponent } from 'vue';
  import TopNavBar from '@/components/modules/shared/TopNavBar.vue';

  export default defineComponent({
    name: 'Home',
    data: () => ({
      titleMenuName : 'About'
    }),
    components : {
      TopNavBar,
    }
  });

</script>
