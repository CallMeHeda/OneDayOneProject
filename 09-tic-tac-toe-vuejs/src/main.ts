import './assets/app.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'quasar/dist/quasar.css'
import { Quasar, QDialog, QBtn, QCard, QCardSection, QToolbar, QToolbarTitle } from 'quasar'

const app = createApp(App)
app.use(router)
app.use(Quasar, {
  config: {
    dark: true
  },
  components: {
    QDialog,
    QBtn,
    QCard,
    QCardSection,
    QToolbar,
    QToolbarTitle
  }
})
app.mount('#app')
