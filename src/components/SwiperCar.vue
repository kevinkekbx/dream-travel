<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import Img_718 from '~/assets/images/cars/718.png'
import Img_911 from '~/assets/images/cars/911.png'
import Img_Cayenne from '~/assets/images/cars/Cayenne.png'
import Img_Macan from '~/assets/images/cars/Macan.png'
import Img_Panamera from '~/assets/images/cars/Panamera.png'
import Img_Taycan from '~/assets/images/cars/Taycan.png'

const cars = [
  {
    name: '718',
    img: Img_718,
  },
  {
    name: '911',
    img: Img_911,
  },
  {
    name: 'Cayenne',
    img: Img_Cayenne,
  },
  {
    name: 'Macan',
    img: Img_Macan,
  },
  {
    name: 'Panamera',
    img: Img_Panamera,
  },
  {
    name: 'Taycan',
    img: Img_Taycan,
  },
]
</script>

<template>
  <div>
    <Swiper
      slides-per-view="auto" :centered-slides="true" :space-between="30"
      :pagination="{
        clickable: true,
      }"
      class="mySwiper"
    >
      <SwiperSlide v-for="car in cars" :key="car.name" w="60%" h="37.5">
        <img :src="car.img" :alt="car.name">
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped lang="scss">
.swiper {
  width: 100%;
  height: 150px;
}

.swiper-slide {
  transition: transform 0.5s ease-in-out;
  &.swiper-slide-active{
    transform: scale(1.3);
  }
}
</style>
