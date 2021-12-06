import { createApp } from "vue";
import App from "./App.vue";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap";

import router from "./router";
import store from "./store";

import "./scss/main.scss";

// Font Awesome Icon
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faTwitter } from "@fortawesome/free-brands-svg-icons";
library.add(faTwitter);


createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  // .use(VueCarousel)
  // .component(
  //   "VueFontawesome",
  //   require("vue-fontawesome-icon/VueFontawesome.vue").default
  // )
  .mount("#app");

// add necessary dependencies...
