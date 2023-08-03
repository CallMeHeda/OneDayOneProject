import './assets/style/app.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { mdiCheckboxBlankOutline, mdiCheckboxMarked, mdiDeleteForever } from '@mdi/js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faMagnifyingGlass,
  faBasketShopping,
  faCartShopping
} from '@fortawesome/free-solid-svg-icons'

library.add(faMagnifyingGlass, faBasketShopping, faCartShopping)

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

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
