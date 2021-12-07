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

// brand icon
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
library.add(faFacebook);
library.add(faTwitter);
library.add(faGoogle);
library.add(faInstagram);
library.add(faLinkedin);
library.add(faGithub);
library.add(faTelegram);

// solid icon
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhone} from "@fortawesome/free-solid-svg-icons";
import { faGlobeAsia} from "@fortawesome/free-solid-svg-icons";

library.add(faTasks);
library.add(faCode);
library.add(faUsers);
library.add(faCalendarAlt);
library.add(faMapMarkerAlt);
library.add(faPhone);
library.add(faGlobeAsia);
 

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
