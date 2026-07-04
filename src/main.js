import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { routes as router } from './router/index'

createApp(App).use(router).mount('#app')


