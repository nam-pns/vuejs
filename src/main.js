import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
// import store from './store/index.js'

import router from './router/index.js'


const app = createApp(App)
app.use(router)
app.mount('#app')
//
// new Vue ({
//   render: h => h(App),
//   store
// }).$mount('#app')
