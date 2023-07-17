import { createApp } from 'vue'
import store from './store'
import router from "./router";
import App from './App.vue'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faClock, faBars, faXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faClock, faBars, faXmark, faMagnifyingGlass);

// add Tailwin
import './index.css'

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.use(store)
.mount('#app')


