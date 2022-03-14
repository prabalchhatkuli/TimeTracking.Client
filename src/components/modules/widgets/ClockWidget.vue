<template>
    <div class="callout calendar-day">
        <div class="grid-x align-middle align-middle">
            <div class="auto cell">
                <h3>{{ momentInstance.format('h:mm:ss a') }}</h3>
            </div>
            <div class="auto cell">
                <h6>{{ momentInstance.format(' dddd[,] DD MMMM YYYY') }}</h6>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

    import {defineComponent} from 'vue';
    import moment from 'moment';

    export default defineComponent({
        data: () => ({
            momentInstance: moment()
        }),
        mounted() {
            setInterval(() => {
                this.momentInstance = moment()
            }, 1000)
        }
    });
</script>