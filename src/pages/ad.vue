<script lang='ts' setup>

</script>

<template>
  <div>
    <HeaderMenu />
    <!-- video bg -->
    <div relative>
      <video
        controls="false" src="../assets/videos/video2.mp4"
        loop autoplay muted h-screen
      />
      <!-- mask -->
      <div absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-black:70>
        <div px-14 pt-43>
          <h3 text-2xl font-porsche>
            这是标题这是标题这是标题
          </h3>
          <p mt-2.5 font-porsche op-50>
            这是描述这是描述这是描述这是描述这是描述这是描述
          </p>
        </div>
        <div mt-88 fccc gap-2>
          <span>向下滚动</span>
          <div animate-pulse>
            <div i-ic-round-keyboard-double-arrow-down animate-bounce />
          </div>
        </div>
        <div mt-12 fccc gap-2 font-porsche>
          <div i-porsche-logo h-2 w-28 />
          <span tracking-6px>
            YOUNG
            <br>
            DREAM
          </span>
        </div>
      </div>
    </div>
    <div pb-11 pt-15 bg="#eeeff2">
      <SwiperCar />
      <div mt-15 px-15 font-porsche text-primary>
        <div fccc gap-2>
          <h3>这是标题</h3>
          <p op-50>
            这是描述这是描述这是描述这是描述这是描述这是描述
          </p>
        </div>
        <div mt-5 op-50>
          介绍young dream计划的文案介绍young dream计划的文案介绍young dream计划的文案介绍young dream计划的文案介绍young dream计划的文案介绍young dream计划的文案介绍young dream计划的文案介绍young dream计划的文案介绍young dream计划的文案介绍yo
        </div>
        <button b="~ primary" mt-18 h-48px w-full fcc rd-md>
          报名开启梦想
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
//全屏按钮
video::-webkit-media-controls-fullscreen-button {
    display: none;
}
//播放按钮
video::-webkit-media-controls-play-button {
    display: none;
}
//进度条
video::-webkit-media-controls-timeline {
    display: none;
}
//观看的当前时间
video::-webkit-media-controls-current-time-display{
    display: none;
}
//剩余时间
video::-webkit-media-controls-time-remaining-display {
    display: none;
}
//音量按钮
video::-webkit-media-controls-mute-button {
    display: none;
}
video::-webkit-media-controls-toggle-closed-captions-button {
    display: none;
}
//音量的控制条
video::-webkit-media-controls-volume-slider {
    display: none;
}
//所有控件
video::-webkit-media-controls-enclosure{
    display: none;
}
</style>
