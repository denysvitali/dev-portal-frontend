import { createApp } from "vue";
import ElementPlus from 'element-plus';

import App from "./App.vue";
import store from "./store";
import router from "./router";

import 'element-plus/lib/theme-chalk/index.css';

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .mount("#app");
