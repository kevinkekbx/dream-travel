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
  <div flex gap-17>
    <div v-for="(item, idx) in data" :key="item" h="52px">
      <div
        relative h-6 w-6 fcc rd-full
        text="primary center"
        b="1 primary"
        un-after="content-empty h-1px w-17 b-t b-t-primary absolute right-6 top-1/2 translate-y--50%"
        :class="[
          idx === 0 ? 'after-hidden' : '',
          idx + 1 > step ? 'after-b-t-primary/25! text-primary/70 after-b-op-70! b-op-70!' : '',
          idx + 1 === step ? 'bg-primary text-white' : '',
        ]"
      >
        <span v-if="idx + 1 >= step">{{ idx + 1 }}</span>
        <div v-else i-ic-baseline-check />
        <span
          class="absolute bottom-[calc(-100%-8px)] left-1/2 translate-x--50%"
          whitespace-nowrap text-primary
        >{{ item }}</span>
      </div>
    </div>
  </div>
</template>
