<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'IndexPage',
})

const step = ref(2)
</script>

<template>
  <div class="page h-screen w-screen">
    <div py-8>
      <img w-full src="../assets/images/911_Carrera.png" alt="911_Carrera">
    </div>
    <h3 text-center text-2xl font-600 text-primary>
      Taycan 4 Cross Turismo
    </h3>
    <p mt-20 text="center #B65B5B">
      你的梦想之旅马上就要开启了
      <br>
      在开始之前就先阅读 <span font-600>PYD细则</span>
    </p>
    <div mb-30 mt-10 w-full flex justify-center px-5>
      <Timeline v-model:step="step" :data="['梦想简介', '梦想基金', '梦想实习生', '梦想终章']" />
    </div>
    <div px-5>
      <button text="white center" h-12 w-full rd-md bg-primary lh-12>
        立即开始
      </button>
    </div>
  </div>
</template>

<style scoped>
.page{
  background: linear-gradient(180deg, rgba(255, 193, 198, 0.30) 0%, rgba(255, 255, 255, 0.00) 100%), var(--text-text-inverse, #FFF);
}
</style>
