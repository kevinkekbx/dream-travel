<script lang='ts' setup>
const route = useRoute()
const { type = 'SIGN_UP' } = route.query

// 报名审核 SIGN_UP
// 梦想基金审核 DREAM_FUND
// 试炼审核 TRIAL

const typeEnum = ref({
  SIGN_UP: '报名审核',
  DREAM_FUND: '梦想基金审核',
  TRIAL: '试炼审核',
})
const _type = type as keyof typeof typeEnum
// @ts-expect-error something wrong
const title = computed(() => typeEnum.value[_type])
</script>

<template>
  <div bg="#eeeff2" min-h-screen px-6 py-10 font-porsche text-primary>
    <h3 text-2xl>
      Porsche Young Dream
      <br>
      {{ title }}
    </h3>
    <div mt-7.5 fccc gap-3>
      <div v-for="i in 6" :key="i" rd-1 bg-white p-4>
        <div fbc text-lg fw-700>
          <div>
            <span>zahnasd</span>
            <span mx-1 fw-normal>|</span>
            <span>zahnasd</span>
          </div>
          <span>梦想车型： 718</span>
        </div>
        <div op-50>
          asddasdasd@.com
          <br>
          13131-1-3-1-
        </div>
        <div my-4 w-full flex>
          x啊是妇女节卡上飞机卡福卡上净空法师的减肥健身的进口关税的健康
          x啊是妇女节卡上飞机卡福卡上净空法师的减肥健身的进口关税的健康
        </div>
        <div fcc gap-2>
          <van-button color="#040609" square plain block type="primary">
            忽略
          </van-button>
          <van-button color="#040609" square block type="primary">
            通过
          </van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
</style>
