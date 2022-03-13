import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Counter from "@/components/modules/counter/Counter.vue";
import FetchData from "@/components/modules/weatherForecast/FetchData.vue";
import ClockIn from "@/components/modules/clockInNOut/ClockIn.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Counter",
    name: "Counter",
    component: Counter,
  },
  {
    path: "/FetchData",
    name: "FetchData",
    component: FetchData,
  },
  {
    path: "/About",
    name: "About",
    component: About,
  },
  {
    path: "/ClockIn",
    name: "ClockIn",
    component: ClockIn,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
