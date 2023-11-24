<script lang='ts' setup>
import { showSuccessToast } from 'vant'

const isDisabled = ref(true)

const router = useRouter()

function handleStart() {
  isDisabled.value = true

  setTimeout(() => {
    showSuccessToast('即将进入梦想之旅')
    setTimeout(() => {
      router.push('/travel')
    }, 1500)
  }, 1500)
}
</script>

<template>
  <div bg="#eeeff2" pr min-h-screen pt-16>
    <div>
      <img :src="selectedCatModel.img" :alt="selectedCatModel.name">
    </div>
    <div mt-16 fccc font-porsche c-primary>
      <h3 text-2xl font-700>
        {{ isDisabled ? '已提交，报名中' : '报名成功' }}
      </h3>
      <p mt-2 text-lg>
        {{ userModel.name }}｜{{ userModel.type }}
      </p>
      <p text-lg>
        梦想车型：{{ selectedCatModel.name }}
      </p>
      <p mt-8 px-11 text-center text-base op-60>
        {{ isDisabled
          ? '谢谢你的报名，我们会核实你的金点子，一旦被采纳，我们将为您开启PYD(Porsche Young Dream)通道'
          : '恭喜你，你的金点子被采纳，已为您开启PYD(Porsche Young Dream)通道' }}
      </p>
    </div>
    <div pa bottom-12 w-full px-6>
      <van-button :disabled="isDisabled" color="#040609" block font-porsche type="primary" @click="handleStart">
        开启梦想之旅
      </van-button>
    </div>
  </div>
</template>
