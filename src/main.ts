import './assets/main.css'
import './index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { InitialiseData } from './data/data'

InitialiseData();

const app = createApp(App)
app.use(router)
app.mount('#app')
