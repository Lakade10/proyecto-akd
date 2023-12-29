import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config'
import Ripple from 'primevue/ripple'
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primeicons/primeicons.css'

createApp(App).use(store).use(router).use(PrimeVue, { ripple: true }).directive('ripple', Ripple).mount('#app')