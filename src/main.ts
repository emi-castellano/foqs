import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faPlay,
  faSpinner,
  faChevronLeft,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

library.add(faPlay, faSpinner, faChevronLeft, faChevronUp, faChevronDown);

import "./assets/main.scss";

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
