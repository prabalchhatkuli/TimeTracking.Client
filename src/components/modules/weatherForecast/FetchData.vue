<template>
  <TopNavBar :titleMenuName="titleMenuName"/>
    <div>
        <p>This component demonstrates fetching data from the backend server.</p>
        <p v-show="error">An error occured!</p>

        <table v-show="!error" v-if="forecasts" class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="forecast in forecasts" :key="forecast.date">
                    <td>{{ forecast.date }}</td>
                    <td>{{ forecast.temperatureC }}</td>
                    <td>{{ forecast.temperatureF }}</td>
                    <td>{{ forecast.summary }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">

    import axios from 'axios';
    import { defineComponent } from 'vue';
    import type { Forecast } from "../../../models/Forecast";
    import TopNavBar from '@/components/modules/shared/TopNavBar.vue';

    export default defineComponent({
        name : 'FetchData',
        components : {
            TopNavBar,
        },
        data: () => ({
            forecasts : [] as Forecast[],
            error: "",
            titleMenuName : 'Weather Forecast'
        }),
        methods: {
            async fetchForecast(){
                try {
                    let response = await axios.get(import.meta.env.VITE_API_SERVERPORT + '/api/WeatherForecast/GetWeather');
                    this.forecasts = response.data as Forecast[];
                } catch (returnedError) {
                    this.error = returnedError as string;
                }
            }
        },
        async mounted() {
            await this.fetchForecast();
        }
    });

</script>