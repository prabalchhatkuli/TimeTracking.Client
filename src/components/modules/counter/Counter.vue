<template>
    <TopNavBar :titleMenuName="titleMenuName"/>
    <p>This is a simple example of a Vue component.</p>
    <p aria-live="polite">Current count: <strong> {{ currentCount }} </strong> </p>
    <button class="btn btn-primary" @click="incrementCounter"> Increment </button>
</template>

<script lang="ts">

    import { defineComponent } from 'vue';
    import TopNavBar from '@/components/modules/shared/TopNavBar.vue';

    export default defineComponent({
        name: 'Counter',
        components : {
            TopNavBar,
        },
        data: () => ({
            currentCount: 0,
            titleMenuName : 'Counter',
        }),
        methods: {
            incrementCounter(){
                this.currentCount++;
            }
        }
    });
</script>

