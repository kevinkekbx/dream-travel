<script lang='ts' setup>
withDefaults(defineProps<{
  blur: boolean
}>(), {
  blur: true,
})
</script>

<template>
  <div>
    <div fixed z-10 h-15 w-screen flex items-center px-4.5 :class="blur ? 'backdrop-blur' : ''">
      <div i-ic-round-close h-6 w-6 text-gray />
      <div flex-1 />
      <div i-ic-baseline-format-list-bulleted h-6 w-6 text-gray />
    </div>
  </div>
</template>

<style lang='scss' scoped>
</style>
