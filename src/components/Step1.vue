<script lang='ts' setup>
import { showSuccessToast } from 'vant'

// step1
const isApply = ref(false)

function handleApply() {
  showSuccessToast('已申请')
  isApply.value = true

  handleNextStep()
}
</script>

<template>
  <div>
    <div v-if="isApply" mt-12 fccc>
      <h3 text-20px>
        已申请
      </h3>
      <p mt-1 text-center op-50>
        请等待工作人员联系，并发放助力基金。
        <br>
        如遇问题，请联系：XXXXXX
      </p>
    </div>
    <p v-else mt-12 text-center text-base>
      为了更好的帮助你完成追梦之旅，
      <br>
      请领取助力基金
    </p>
    <div mt-12>
      <CarIdCard />
    </div>
    <div v-if="!isApply" mt-21 w-full>
      <van-button color="#040609" block type="primary" native-type="submit" @click="handleApply">
        领取梦想基金
      </van-button>
    </div>
  </div>
</template>
