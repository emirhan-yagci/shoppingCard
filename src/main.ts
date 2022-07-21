import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./index.css";


/*********COMPONENTSS***********/ 
import baseContainer from "./components/baseContainer.vue"
import theNav from "./components/LAYOUT/theNav.vue"
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("the-nav",theNav);
app.mount("#app");
