import { createApp } from "vue";
import App from "./App.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
//axios
// import { http } from "@/config/http-common";
import VueAxios from "vue-axios";
import axios from "@/plugins/axios";
//router
import * as VueRouter from "vue-router"; // alternative ways of importing
import { routes } from "@/router";

// //lodash
import VueLodash from "vue-lodash";
import lodash from "lodash";

//css
import "@/assets/main.css";
import "@/assets/styles/tailwind.css";
import "@mdi/font/css/materialdesignicons.css";
//===========================================

const app = createApp(App);

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

app.use(VueAxios, axios).use(router).use(vuetify);
// .use(VueLodash, { name: "_", lodash });

app.mount("#app");
