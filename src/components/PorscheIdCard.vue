<script lang='ts' setup>
import logo from '~/assets/images/logo-white-bg.png'
</script>

<template>
  <div class="idcard" w-48 px-4.5 py-4>
    <div fbc>
      <div>
        <div op-50>
          梦想实习生
        </div>
        <div text-lg>
          张三
        </div>
      </div>
      <img h-11 w-11 :src="logo" alt="" srcset="">
    </div>
    <div mb-4 mt-6 fcc>
      <div i-ic-outline-person-4 text-24 op-10 />
    </div>
  </div>
</template>

<style lang='scss' scoped>
.idcard{
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #FFF;
  box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.12);
}
</style>
