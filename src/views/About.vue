<template>
  <Default :titleMenuName="titleMenuName">
  <div>
    <h1>This is an about page</h1>
  </div>
  </Default>
</template>

<script lang="ts">
  
  import { defineComponent } from 'vue';
  import Default from '../layout/Default.vue';


  export default defineComponent({
    name: 'Home',
    data: () => ({
      titleMenuName : 'About'
    }),
    components : {
    Default,
}
  });

</script>
