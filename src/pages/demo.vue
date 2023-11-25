<script lang='ts' setup>
import C3D from './css3d'
import Img_718 from '~/assets/cars/718-11.png'
import Img_911 from '~/assets/cars/cayenne-2.png'
import Img_Cayenne from '~/assets/cars/Cayenne.png'
import Img_Macan from '~/assets/cars/Macan.png'
import Img_Panamera from '~/assets/cars/Panamera.png'
import Img_Taycan from '~/assets/cars/Taycan-11.png'
import Img_Cloud from '~/assets/cloud.png'
import Img_Logo from '~/assets/cars/logo.webp'
import Img_Road from '~/assets/cars/road.jpg'

const vRef = ref<HTMLVideoElement>()
const router = useRouter()

onMounted(() => {})

const s = new C3D.Stage()
s.size(window.innerWidth, window.innerHeight)
  .material({
    color: '#000000',
  })
  .update()
document.body.appendChild(s.el)

// 创建一个三维容器（创建以方便分组使用）
const sp = new C3D.Sprite()
sp.position(0, 0, -500).update()
s.addChild(sp)

const bgDaa = [
  { url: Img_718 },
  { url: Img_911 },
  { url: Img_Cayenne },
  { url: Img_Macan },
  { url: Img_Panamera },
  { url: Img_Taycan },
  { url: Img_Cloud },
  { url: Img_Logo },
]

setTimeout(() => {
  const spa = new C3D.Sprite()
  spa.position(0, 0, -500).update()
  s.addChild(spa)

  // 911 Move
  const pa = new C3D.Plane()
  pa.size(window.innerWidth, window.innerHeight)
    .position(0, 0, 0)
    // .rotation(10, 20, 10)
    .material({
      image: Img_Road,
      repeat: 'round',
      bothsides: false,
    })
    .buttonMode(true)
    .update()
  spa.addChild(pa)

  function moveaaB() {
    // sp2.rotate(0, 0, 5).updateT()
    spa.move(0, 10, 5).updateT()
    spa.scale(1, 1, 1).updateT()
    requestAnimationFrame(moveaaB)
  }

  requestAnimationFrame(moveaaB)
}, 1000)

// 911 Move
const p = new C3D.Plane()
p.size(150, 70)
  .position(20, 0, 0)
  //   .rotation(10, 10, 10)
  .material({
    image: bgDaa[0].url,
  })
  .buttonMode(true)
  .update()
sp.addChild(p)

function moveA() {
  //   sp.rotate(0, 0, 5).updateT()
  sp.move(0, -10, 5).updateT()
  sp.scale(1.3, 1.3, 1.3).updateT()
  requestAnimationFrame(moveA)
}

requestAnimationFrame(moveA)

// ================================
setTimeout(() => {
  const sp2 = new C3D.Sprite()
  sp2.position(0, 0, -500).update()
  s.addChild(sp2)

  // 911 Move
  const p2 = new C3D.Plane()
  p2.size(500, 282)
    .position(0, 0, 0)
    // .rotation(10, 20, 10)
    .material({
      image: bgDaa[1].url,
    })
    .buttonMode(true)
    .update()
  sp2.addChild(p2)

  function moveB() {
    // sp2.rotate(0, 0, 5).updateT()
    sp2.move(0, 10, 5).updateT()
    sp2.scale(0.4, 0.4, 0.4).updateT()
    requestAnimationFrame(moveB)
  }

  requestAnimationFrame(moveB)
}, 1000)

// -----------------------------------

// ========================

setTimeout(() => {
  const sp3 = new C3D.Sprite()
  sp3.position(10, -50, -1000).update()
  s.addChild(sp3)

  // 911 Move
  const p3 = new C3D.Plane()
  p3.size(150, 70)
    .position(0, -90, 0)
    // .rotation(10, 20, 10)
    .material({
      image: bgDaa[6].url,
      repeat: 'no-repeat',
      bothsides: false,
    })
    .buttonMode(true)
    .update()
  sp3.addChild(p3)

  function moveC() {
    // sp3.rotate(0, 0, 5).updateT()
    sp3.move(0, 0, 25).updateT()
    sp3.scale(1.5, 1.5, 1.5).updateT()
    requestAnimationFrame(moveC)
  }

  requestAnimationFrame(moveC)
}, 3000)

setTimeout(() => {
  const sp4 = new C3D.Sprite()
  sp4.position(10, -550, -1000).update()
  s.addChild(sp4)

  // 911 Move
  const p4 = new C3D.Plane()
  p4.size(250, 334)
    .position(0, 0, 0)
    // .rotation(10, 20, 10)
    .material({
      image: bgDaa[7].url,
      repeat: 'no-repeat',
      bothsides: false,
    })
    .buttonMode(true)
    .update()
  sp4.addChild(p4)

  sp4.on('click', () => {
    // eslint-disable-next-line no-console
    console.log('click')
  })

  function moveD() {
    // sp3.rotate(0, 0, 5).updateT()
    sp4.move(0, 0, 25).updateT()
    sp4.scale(0.3, 0.3, 0.3).updateT()

    // requestAnimationFrame(moveD)
  }

  document.getElementById('bg').style.display = ''
  requestAnimationFrame(moveD)
}, 5000)

setTimeout(() => {
  s.size(window.innerWidth, window.innerHeight)
    .material({
      image: Img_Road,
      repeat: 'round',
      bothsides: false,
    }).update()
}, 5000)

function startDream() {
  // eslint-disable-next-line no-console
  console.log('startDream')
  router.push('/')
}
</script>

<template>
  <audio ref="vRef" controls class="aud">
    <source src="../assets/bgm.mp3">
  </audio>

  <div v-show="false" id="bg" class="bg">
    <div>
      追梦之旅
    </div>

    <div mt-33 fccc flex gap-2 text-16px @click="startDream">
      <span>向下滚动</span>
      <div animate-pulse>
        <div i-ic-round-keyboard-double-arrow-down animate-bounce />
      </div>
    </div>

    <div class="logo-area" mt-14 fccc gap-2 font-porsche>
      <div i-porsche-logo h-2 w-28 />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg{
  color: #fff;
  position: absolute;
  z-index: 9;
  top: 40%;
  text-align: center;
  width: 100%;
  font-size: 48px;
}
.logo-area{
  position: absolute;
  z-index: 9;
  text-align: center;
  width: 100%;
  top: -240px;
}
</style>
