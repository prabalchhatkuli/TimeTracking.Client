<template>
    <h1>Counter</h1>
    <p>This is a simple example of a Vue component.</p>
    <p aria-live="polite">Current count: <strong> {{ currentCount }} </strong> </p>
    <button class="btn btn-primary" @click="incrementCounter"> Increment </button>
</template>

<script lang="ts">

    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Counter',
        data: () => ({
            currentCount: 0
        }),
        methods: {
            incrementCounter(){
                this.currentCount++;
            }
        }
    });
</script>

