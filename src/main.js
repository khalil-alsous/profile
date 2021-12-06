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

import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(faFacebook);
library.add(faTwitter);
library.add(faGoogle);
library.add(faInstagram);
library.add(faLinkedin);
library.add(faGithub);


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
