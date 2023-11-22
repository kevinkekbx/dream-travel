<script lang='ts' setup>
const steps = [
  {
    title: '梦想基金',
    desc: '更好的帮助你完成试炼',
  },
  {
    title: '试炼目标',
    desc: '根据跟你的身份你需要完成一年实现XX万的盈利',
  },
  {
    title: '梦想实习生',
    desc: '需要你以实习生的身份为公司效力三年',
  },
  {
    title: '梦想终章',
    desc: '已成为正式员工的你为公司再奋斗两年不过分吧',
  },
]
</script>

<template>
  <div bg="#eeeff2" pr min-h-screen text="primary" font-porsche>
    <AimCarMask />
    <div pr z-1 h-full px-6 pt-60>
      <div fccc>
        <h3 text-32px fw-700 class="lh-110%">
          梦想之旅
        </h3>
        <p mt-3 op-50>
          你的梦想之旅马上就要开启了
          <br>
          在开始之前请先阅读 PYD细则
        </p>
      </div>
      <div mt-12 space-y-5>
        <div v-for="(item, idx) in steps" :key="item.title" flex gap-2 pb-5 b-b="~ primary op-50 dashed" last:b-none>
          <div h-6 w-6 fcc b="~ primary" rd-full>
            {{ idx + 1 }}
          </div>
          <div flex="1">
            <p text-base>
              {{ item.title }}
            </p>
            <p mt-1 op-50>
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
      <div mt-12>
        <van-button color="#040609" block type="primary" native-type="submit">
          立即开始
        </van-button>
      </div>
    </div>
  </div>
</template>
