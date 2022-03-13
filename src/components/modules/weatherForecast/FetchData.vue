<template>
    <div>
        <h1>Weather Forecast</h1>
        <p>This component demonstrates fetching data from the backend server.</p>
        <p v-if="!forecasts"><em>Loading...</em></p>

        <table class="table table-bordered table-striped" v-if="forecasts">
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

export default defineComponent({
    name : 'FetchData',
    data: () => ({
        forecasts : [] as Forecast[],
        error: "",
    }),
    methods: {
        async fetchForecast(){
            try {
                let response = await axios.get('http://localhost:7069/api/WeatherForecast/GetWeather');
                this.forecasts = response.data as Forecast[];
            } catch (returnedError) {
                this.error = returnedError as string;
            }
        }
    },
    async mounted() {
        await this.fetchForecast();
    }
})

</script>