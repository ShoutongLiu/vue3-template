import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { ElButton } from 'element-plus'
import App from './App.vue'
import router from './router/index'

const pinia = createPinia()

const app = createApp(App)
app.use(router).use(pinia).mount('#app')
app.use(ElButton)
