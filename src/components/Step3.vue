<script lang='ts' setup>
const year = ref(0)
const total = ref(3)
function addYear() {
  if (year.value >= total.value)
    return
  year.value += 1
}
</script>

<template>
  <div w-full>
    <p mt-12 text-center text-base>
      恭喜你成为梦想实习生，加油你是最棒的！
      <br>
      三年弹指一挥间
    </p>
    <div mt-12 fcc>
      <PorscheIdCard @click="addYear" />
    </div>
    <div mt-8 text-center text-lg op-80>
      实习完成 ({{ year }} / {{ total }} 年)
    </div>
  </div>
</template>
