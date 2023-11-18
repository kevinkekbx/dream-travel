import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { Swiper, SwiperSlide } from 'swiper/vue'
import App from './App.vue'

import 'swiper/css'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
})
app.use(router)
app.use(Swiper)
app.use(SwiperSlide)
app.mount('#app')
