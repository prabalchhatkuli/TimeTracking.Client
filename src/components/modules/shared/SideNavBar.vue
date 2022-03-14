<template>
<div>
    <div class="float-left collapse width show" id="sidebar">
        <div class="py-3">
            <h4>TIME TRACKING</h4>
        </div>
        <div class="list-group border-0 card text-center text-md-left" id="menuItems">
            <a class="list-group-item list-group-item-action py-2 ripple">
              <router-link :to="{ name: 'Home' }" class="nav-link" title="Dashboard">Dashboard</router-link>
            </a>
            <a class="list-group-item list-group-item-action py-2 ripple">
              <router-link :to="{ name: 'Counter' }" class="nav-link" title="Counter">Counter</router-link>
            </a>
            <a class="list-group-item list-group-item-action py-2 ripple">
              <router-link :to="{ name: 'About' }" class="nav-link" title="About">About</router-link>
            </a>
            <a class="list-group-item list-group-item-action py-2 ripple">
              <router-link :to="{ name: 'FetchData' }" class="nav-link" title="Weather Forecast">Weather Forecast</router-link>
            </a>
        </div>
    </div>
  </div>
</template>

<script lang="ts">

    import { defineComponent } from 'vue';
    
    export default defineComponent({
        name : 'SideNavBar',
    })
</script>

<style scoped>
#sidebar {
    overflow: hidden;
    z-index: 999;
    border-right-color: gray;
    border-right-style: solid;
    border-right-width: 1px;
    position: fixed;
    min-width: 210px;
}

#sidebar .list-group-item {
    border-radius: 0;
    border-left: 0;
    border-right: 0;
    white-space: nowrap;
    padding: 0.75rem 0.99rem;
}

#sidebar .list-group {
    min-height: 100vh;
}

#sidebar svg {
    margin-right: 6px;
}

.sidebar-link {
    font-weight: 600;
}

#sidebar .list-group-item.collapsed .collapse-arrow-show {
    display:none;
}
</style>