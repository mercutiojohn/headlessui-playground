// Styles
import './assets/main.css'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

// Vue Official Components
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// --------------
import App from './App.vue'

// Env Components
import router from './router'

// --------------
const app = createApp(App)

// Env Components
app.use(createPinia())
app.use(router)

// --------------
app.mount('#app')
