import { createApp } from "vue";
import App from "./App.vue";

import "@/styles/main.scss";
import "uno.css";

import { createEditor } from "../../emoe-lib/src/index";

const app = createApp(App);

app.use(createEditor());

app.mount("#app");
