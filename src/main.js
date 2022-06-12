import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
// Arco
import ComHeader from './components/ComHeader.vue'
// 自定义header

const app = createApp(App)
app.component('ComHeader', ComHeader)
app.use(ArcoVue)
app.use(ArcoVueIcon)
app.use(router).mount('#app')
