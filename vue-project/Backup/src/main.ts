import { createApp } from "vue";

import App from './App.vue'

// import pinia
import {createPinia} from 'pinia'

const app = createApp(App)

//create pinia
const pinia = createPinia()

//use pinia
app.use(pinia)
app.mount('#app')