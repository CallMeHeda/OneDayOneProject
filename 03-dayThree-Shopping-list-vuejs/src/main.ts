import './assets/style/app.css'

import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faMagnifyingGlass,
  faBasketShopping,
  faCartShopping
} from '@fortawesome/free-solid-svg-icons'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { mdiCheckboxBlankOutline, mdiCheckboxMarked, mdiDeleteForever } from '@mdi/js'

library.add(faMagnifyingGlass, faBasketShopping, faCartShopping)

// const eventBus = mitt()
const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
      checkboxOn: mdiCheckboxMarked,
      checkboxOff: mdiCheckboxBlankOutline,
      delete: mdiDeleteForever
    },
    sets: {
      mdi
    }
  }
})

app.use(router)
app.use(vuetify)
// pass the injection key
app.use(store)
app.component('font-awesome-icon', FontAwesomeIcon)

// app.config.globalProperties.emitter = eventBus
app.mount('#app')
