<script lang='ts' setup>
const year = ref(0)
const total = ref(2)
function addYear() {
  if (year.value >= total.value)
    return

  year.value += 1
  if (year.value >= total.value)
    handleNextStep()
}
</script>

<template>
  <div w-full>
    <p mt-12 text-center text-base>
      恭喜你成为 Porsche 正式员工
      <br>
      和大家一起努力吧
    </p>
    <div mt-12 fcc>
      <PorscheIdCard @click="addYear" />
    </div>
    <div mt-8 text-center text-lg op-80>
      努力中 ({{ year }} / {{ total }} 年)
    </div>
  </div>
</template>
