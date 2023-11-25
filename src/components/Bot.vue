<script lang='ts' setup>
const dom = ref<HTMLDivElement>()
const x = ref(0)
const y = ref(0)

onMounted(() => {
  const windowHeight = window.innerHeight
  const windowWidth = window.innerWidth
  x.value = windowWidth - dom.value!.offsetWidth
  y.value = windowHeight / 2
})

const style = computed(() => ({
  left: `${x.value}px`,
  top: `${y.value}px`,
}))

function handleMTouchStart() {
  document.body.style.overflow = 'hidden'
}

function handleMTouchMove(e: TouchEvent) {
  const targetX = e.touches[0].clientX - Number(dom.value!.offsetWidth) / 2
  const targetY = e.touches[0].clientY - Number(dom.value!.offsetHeight) / 2

  x.value = targetX < 0
    ? 0
    : targetX > window.innerWidth - Number(dom.value!.offsetWidth) ? window.innerWidth - Number(dom.value!.offsetWidth) : targetX
  y.value = targetY < 0
    ? 0
    : targetY > window.innerHeight - Number(dom.value!.offsetHeight) ? window.innerHeight - Number(dom.value!.offsetHeight) : targetY
}

function handleTouchEnd() {
  document.body.style.overflow = 'auto'
}

const showChat = ref(false)
</script>

<template>
  <div>
    <div
      ref="dom" pf :style="style" z-10 p-1.5 class="breathe"
      @touchstart="handleMTouchStart"
      @touchmove="handleMTouchMove"
      @touchend="handleTouchEnd"
      @click.stop="showChat = true"
    >
      <div i-ic-baseline-support-agent text="gray xl" />
    </div>
    <van-popup
      v-model:show="showChat"
      round
      closeable
      position="bottom"
      :style="{ height: '90%' }"
    >
      <Chat />
    </van-popup>
  </div>
</template>

<style lang="scss" scoped>
.breathe{
  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    opacity: .7;
    background-color: #ffa853;
    transform-origin: center center;
    animation: breathe 2s infinite cubic-bezier(0, 0, .49, 1.02);
  }
}

@keyframes breathe {
  0% {
      transform: translate(-50%, -50%) scale3d(1, 1, 1);
  }

  50%,
  75% {
      transform: translate(-50%, -50%) scale3d(4, 4, 4);
  }

  78%,
  100% {
      opacity: 0
  }
}
</style>
