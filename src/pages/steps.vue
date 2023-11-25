<script lang='ts' setup>
const step = ref(global_step)
</script>

<template>
  <div bg="#eeeff2" pr min-h-screen text="primary" font-porsche>
    <AimCarMask />
    <div pr z-1 h-full px-6 pt-60>
      <div w-full fccc>
        <h3 text-32px fw-700 class="lh-110%">
          梦想之旅
        </h3>
        <div mt-8>
          <Timeline v-model:step="step" :data="['梦想简介', '梦想基金', '梦想实习生', '梦想终章']" />
        </div>
        <!-- STEP -->
        <Step1 v-if="step === 1" />
        <Step2 v-if="step === 2" />
        <Step3 v-if="step === 3" />
        <Step4 v-if="step === 4" />
        <Step5 v-if="step >= 5" />
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.mask{
  background: linear-gradient(180deg, rgba(238, 239, 242, 0.00) 0%, #EEEFF2 100%), linear-gradient(180deg, rgba(238, 239, 242, 0.00) 0%, #EEEFF2 100%), linear-gradient(180deg, rgba(238, 239, 242, 0.00) 0%, #EEEFF2 100%);
}
</style>
