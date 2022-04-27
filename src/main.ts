import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
const pinia = createPinia()
import { ElButton } from 'element-plus'
const app = createApp(App)
app.use(router).use(pinia).mount('#app')
app.use(ElButton)
