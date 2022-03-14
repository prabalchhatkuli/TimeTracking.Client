<template>
  <nav id="mainNavBar" class="navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid">
      <a class="navbar-brand">
        <h3>{{titleMenuName}}</h3>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav me-auto">
          <span>
            <button class="btn" data-bs-toggle="modal" data-bs-target="#clockInModal">Clock In</button>
            <ClockInModal modalID="clockInModal"></ClockInModal>   
          </span>         
        </div>
        <div id="searchDiv">
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  </nav>
</template>    

<script lang="ts">
import { defineComponent } from 'vue';
import ClockInModal from '../clockInNOut/ClockInModal.vue';

    export default defineComponent({
        name: 'TopNavBar',
        components : {
          ClockInModal,
        },
        props: ['titleMenuName']       
    });
</script>

<style scoped>

#searchDiv {
  padding-left: 1em;
}

</style>