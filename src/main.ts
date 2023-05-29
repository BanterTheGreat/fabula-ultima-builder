import './index.css'
import 'vue-final-modal/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { InitialiseData } from './data/data'
import { createVfm } from 'vue-final-modal'

InitialiseData();

const app = createApp(App)
const vfm = createVfm();
app.use(router)
app.use(vfm)
app.mount('#app')
