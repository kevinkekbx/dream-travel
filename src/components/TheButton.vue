<script lang='ts' setup>
withDefaults(defineProps<{
  disable?: boolean
}>(), {
  disable: false,
})
</script>

<template>
  <div>
    <button

      h-12 w-full fcc select-none rd-md bg-primary c-white outline-none trans active:scale-98 focus:outline-none important-duration-100
      :disabled="disable"
      :class="{
        'bg-gray-300': disable,
      }"
    >
      <slot />
    </button>
  </div>
</template>
