<template>
  <div pa left-0 top-0 z-0 h-90 w-full of-hidden>
    <img pa class="left-1/2 top--15% h-120% translate-x--50%" max-w-fit :src="selectedCatModel.img" alt="" srcset="">
    <div class="mask pa" h-full w-full />
  </div>
</template>

<style lang='scss' scoped>
.mask{
  background: linear-gradient(180deg, rgba(238, 239, 242, 0.00) 0%, #EEEFF2 100%), linear-gradient(180deg, rgba(238, 239, 242, 0.00) 0%, #EEEFF2 100%), linear-gradient(180deg, rgba(238, 239, 242, 0.00) 0%, #EEEFF2 100%);
}
</style>
