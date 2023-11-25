<script lang='ts' setup>
import { showSuccessToast } from 'vant'

onMounted(() => {
  setTimeout(() => {
    showSuccessToast({
      message: '恭喜你的梦想达成, 请查收邮件认证PID',
      duration: 2000,
    })
  }, 1500)
})
</script>

<template>
  <div w-full>
    <p mt-12 text-center text-base>
      恭喜你!
      <br>
      已实现金色梦想
    </p>
    <div mt-12 fcc>
      <img :src="selectedCatModel.img" alt="" srcset="">
    </div>
  </div>
</template>
