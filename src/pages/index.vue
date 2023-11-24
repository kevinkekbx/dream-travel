<script lang='ts' setup>
const vRef = ref<HTMLVideoElement>()

onMounted(() => {
  const handleScroll = () => {
    if (vRef.value && vRef.value.paused)
      vRef.value.play()
  }

  // 引导用户交互，自动播放视频
  useEventListener(document, 'click', handleScroll)
})

const formVisible = ref(false)
function showForm() {
  formVisible.value = true
}

const router = useRouter()

onMounted(() => {
  if (userModel.value.name)
    router.replace('/travel')
})
</script>

<template>
  <div>
    <!-- <HeaderMenu :blur="false" /> -->
    <!-- video bg -->
    <div relative>
      <video
        ref="vRef"
        controls="false" src="https://static.porsche-preview.cn/static/finder/model-page/cover-video/v3/718.mp4"
        loop autoplay muted h-screen
        webkit-playsinline="true"
        playsinline="true"
        x5-video-player-type="h5-page"
      />
      <!-- mask -->
      <div absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-black:70>
        <div px-5 pt-43>
          <h3 text-2xl font-porsche>
            想在 YOUNG 时代追梦保时捷吗？
            <br>
            跟随我们的脚步
          </h3>
          <!-- <p mt-2.5 font-porsche op-50>
            这是描述这是描述这是描述这是描述这是描述这是描述
          </p> -->
        </div>
        <div mt-88 fccc gap-2>
          <span>向下滚动</span>
          <div animate-pulse>
            <div i-ic-round-keyboard-double-arrow-down animate-bounce />
          </div>
        </div>
        <!-- title -->
        <div mt-14 fccc gap-2 font-porsche>
          <div i-porsche-logo h-2 w-28 />
          <span tracking-6px>
            YOUNG
            <br>
            DREAM
          </span>
        </div>
      </div>
    </div>
    <div pb-12 pt-20 bg="#eeeff2">
      <!-- 车辆滑块 -->
      <SwiperCar />
      <div mt-15 px-8 font-porsche text-primary>
        <div fccc gap-2>
          <h3>PYD梦想之旅</h3>
          <!-- <p op-50>
            这是描述这是描述这是描述这是描述这是描述这是描述
          </p> -->
        </div>
        <div mt-5 lh-6 op-50>
          1. 梦想基金：更好的帮助你完成试炼 <br>
          2. 试炼目标：根据跟你的身份你需要完成一年实现XX万的盈利 <br>
          3. 实习生：需要你以实习生的身份为公司效力三年 <br>
          4. 终章：已成为正式员工的你为公司再奋斗两年不过分吧<br>
        </div>
        <!-- 报名 Submit -->
        <div mt-18>
          <van-button color="#040609" block @click="showForm">
            报名开启梦想
          </van-button>
        </div>
      </div>
    </div>

    <van-popup
      v-model:show="formVisible"
      round
      closeable
      position="bottom"
      :style="{ height: '90%' }"
    >
      <TheForm />
    </van-popup>
  </div>
</template>

<style lang="scss" scoped>
.ad-text {
  background: linear-gradient(180deg, rgba(238, 239, 242, 0.00) 0%, #EEEFF2 100%);
}
video{
  object-fit: fill;
}
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
