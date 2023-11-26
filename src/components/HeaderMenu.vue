<script lang='ts' setup>
withDefaults(defineProps<{
  blur?: boolean
}>(), {
  blur: true,
})

function clearUser() {
  if (userModel.value.id) {
    userModel.value = {
      name: '',
      email: '',
      phone: '',
      carIndex: 0,
      message: '',
      type: '',
      id: '',
      status: -2,
    }
  }
}

const route = useRoute()

const blockedRoute = ['/demo']

const display = computed(() => !blockedRoute.includes(route.path))
</script>

<template>
  <div v-show="display">
    <div fixed z-10 h-15 w-screen flex items-center px-4.5 :class="blur ? 'backdrop-blur' : ''" text-lg text-gray>
      <div class="i-carbon:light-filled dark:i-akar-icons:moon-fill" @click="toggleDark()" />
      <div flex-1 />
      <div v-show="userModel.id" i-carbon-user-certification @click="clearUser()" />
    </div>
  </div>
</template>
