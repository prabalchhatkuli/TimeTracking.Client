<template>
    <div id="content-and-sidebar">
        <div class="container-fluid">
            <div class="row d-flex d-md-block flex-nowrap wrapper">
                <SideNavBar/>
                <div id="nav-and-content">
                    <div id="content">
                        <RouterView/>   
                    </div>                  
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

  import { defineComponent } from 'vue';
  import { RouterView } from "vue-router";
  import SideNavBar from "@/components/modules/shared/SideNavBar.vue";

export default defineComponent({
  name : 'DefaultLayout',
  components : {
    RouterView,
    SideNavBar
  }
})
</script>

<style scoped>
    #nav-and-content {
        width: 100%;
        margin-bottom: 50px;
    }

    #content {
        padding-left: 10px;
        padding-top: 5px;
    }

    @media (min-width:768px) {
    #nav-and-content, .footer {
        padding-left: 225px;
    }
}
</style>

