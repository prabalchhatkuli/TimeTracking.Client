<template>
  <TopNavBar :titleMenuName="titleMenuName"/>
  <div>
    <h1>This is the Home Page</h1>
  </div>
</template>


<script lang="ts">
  
  import { defineComponent } from 'vue';
  import TopNavBar from '@/components/modules/shared/TopNavBar.vue';

  export default defineComponent({
    name: 'Home',
    data: () => ({
      titleMenuName : 'Dashboard'
    }),
    components : {
      TopNavBar,
    }
  });

</script>
