<template>
<TopNavBar :titleMenuName = 'titleMenuName'/>
<div>

  </div>
</template>

<script lang="ts">

    import {defineComponent} from 'vue';
    import TopNavBar from '@/components/modules/shared/TopNavBar.vue';

    export default defineComponent({
    name: 'Home',
    data: () => ({
      titleMenuName : 'Clock In'
    }),
    components : {
      TopNavBar,
    }
  });

</script>