<script setup lang="ts">
autoSwitchDark()
</script>

<template>
  <main p="x-4 y-10" text="center gray-700 dark:gray-200">
    <RouterView />
    <TheFooter />
  </main>
</template>
