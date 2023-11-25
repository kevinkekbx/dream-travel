<script lang='ts' setup>

</script>

<template>
  <div class="card" pr h-30 w-60 of-hidden rd-2>
    <!-- <img :src="carsMap[0].img" alt="" srcset=""> -->
    <div pa :style="{ backgroundImage: `url(${selectedCatModel.img})` }" h-full w-full class="bg-[length:200%] bg-[position:50%_38%]" />
    <div pa h-full w-full class="mask" op-80 />
    <div pr z-1>
      <h3 pa left-4 top-4 whitespace-nowrap text-2xl text-black op-40>
        梦想基金
      </h3>
      <div pa right-10 top-4 w-16>
        <div translate-x="-10px" i-porsche-logo-gray h-2 w-28 />
        <span tracking-6px text-black op-15>
          YOUNG
          <br>
          DREAM
        </span>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.card{
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.12);

  .mask{
    background: linear-gradient(105deg, #C3BDA9 0%, #F8F2DD 100%);
  }
}
</style>
