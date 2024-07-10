import './assets/main.scss'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import naive from 'naive-ui'
import 'virtual:svg-icons-register'
import SvgIcon from '@/icons/index.js'
import router from '@/router'
import App from './App.vue'
const app = createApp(App)
SvgIcon(app)
app.use(router).use(ElementPlus).use(naive).mount('#app')
