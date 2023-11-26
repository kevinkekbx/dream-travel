<script lang='ts' setup>
withDefaults(defineProps<{
  blur: boolean
}>(), {
  blur: true,
})
</script>

<template>
  <div>
    <div fixed z-10 h-15 w-screen flex items-center px-4.5 :class="blur ? 'backdrop-blur' : ''" text-lg text-gray>
      <div class="i-carbon:light-filled dark:i-akar-icons:moon-fill" @click="toggleDark()" />
      <div flex-1 />
      <div v-show="userModel.id" i-carbon-user-certification />
    </div>
  </div>
</template>
