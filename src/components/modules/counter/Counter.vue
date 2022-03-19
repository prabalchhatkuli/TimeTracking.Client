<template>
    <Default :titleMenuName="titleMenuName">
        <p>This is a simple example of a Vue component.</p>
        <p aria-live="polite">Current count: <strong> {{ currentCount }} </strong> </p>
        <button class="btn btn-primary" @click="incrementCounter"> Increment </button>
    </Default>
</template>

<script lang="ts">

    import { defineComponent } from 'vue';
    import Default from '../../../layout/Default.vue';

    export default defineComponent({
        name: 'Counter',
        components : {
            Default
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

