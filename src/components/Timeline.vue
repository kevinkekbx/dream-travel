<script lang='ts' setup>
const { data } = defineProps<{
  data: string[]
}>()

const step = defineModel('step', {
  type: Number,
  default: 0,
})
</script>

<template>
  <div flex gap-20>
    <div v-for="(item, idx) in data" :key="item">
      <div
        bg-primary relative h-5 w-5 rd-full lh-5
        text="xs white center"
        un-after="content-empty h-1px w-20 b-t b-t-primary absolute right-5 top-1/2 translate-y--50%"
        :class="[
          idx === 0 ? 'after-hidden' : '',
          idx + 1 > step ? 'bg-gray! after-b-t-gray! after-b-t-dashed!' : '',
        ]"
      >
        {{ idx }}
        <span
          text-primary
          class="absolute bottom--100% left-1/2 translate-x--50%"
          whitespace-nowrap
        >{{ item }}</span>
      </div>
    </div>
  </div>
</template>
