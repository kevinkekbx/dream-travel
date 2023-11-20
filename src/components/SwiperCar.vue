<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
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
      <SwiperSlide v-for="car in carsMap" :key="car.name" w="60%" h="37.5">
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
