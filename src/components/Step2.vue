<script lang='ts' setup>
// step2
const currentRate = ref(30)
const total = ref(300000)

function handleAddProgress() {
  if (currentRate.value + 10 >= 100) {
    currentRate.value = 100
    return
  }
  currentRate.value += 10
}
const gradientColor = {
  '0%': '#F8F2DD',
  '100%': '#C3BDA9',
}
</script>

<template>
  <div w-full>
    <p mt-12 text-center text-base>
      根据跟你的身份，
      <br>
      你需要完成一年实现20万的盈利
    </p>
    <div mt-12 w-full fcc @click="handleAddProgress">
      <van-circle
        v-model:current-rate="currentRate"
        :rate="30"
        stroke-width="60"
        :speed="100"
        size="200px"
        :color="gradientColor"
        layer-color="#cacaca"
        stroke-linecap="square"
      >
        <div h-full w-full fccc>
          <span text-32px fw-600>{{ formatPriceNum(total * (currentRate / 100), 0, '¥ ') }}</span>
          <span mt-2 text-lg op-50>{{ formatPriceNum(total, 0, '¥ ') }}</span>
        </div>
      </van-circle>
    </div>
    <p mt-12 text-center text-lg op-50>
      {{ currentRate >= 100 ? '已完成，请等待审核' : '试炼进行中···' }}
    </p>
  </div>
</template>
