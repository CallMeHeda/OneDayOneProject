import '/dist/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// ICONS
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* ICONS SOLID */
import {
  faBackwardStep,
  faCirclePlay,
  faForwardStep,
  faPause
} from '@fortawesome/free-solid-svg-icons'
/* ICONS REGULAR */
import {} from '@fortawesome/free-regular-svg-icons'

library.add(faBackwardStep, faCirclePlay, faForwardStep, faPause)

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
