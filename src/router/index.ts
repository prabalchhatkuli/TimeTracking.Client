import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Counter from "@/components/modules/counter/Counter.vue";
import FetchData from "@/components/modules/weatherForecast/FetchData.vue";

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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
