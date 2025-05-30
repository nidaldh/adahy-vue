import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { pinia } from './store/index' // Corrected import path
import './assets/styles/main.scss' // Global styles
import './assets/styles/rtl.scss'   // Import RTL SCSS file (optional, if you want to always include it)

const app = createApp(App)

app.use(pinia) // Use Pinia
app.use(router)

app.mount('#app')
