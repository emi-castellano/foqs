import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createPinia } from "pinia";
import "./assets/main.scss";

import {
  faPlay,
  faSpinner,
  faChevronLeft,
  faChevronUp,
  faChevronDown,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faPlay,
  faSpinner,
  faChevronLeft,
  faChevronUp,
  faChevronDown,
  faPause
);

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");
