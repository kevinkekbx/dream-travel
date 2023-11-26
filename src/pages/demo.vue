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
import Img_DreamTxt from '~/assets/catchDreamTxt.png'
import Img_Circle from '~/assets/cars/circle.png'
import Img_Play from '~/assets/cars/play.png'
import Img_9112 from '~/assets/cars/911-21.png'
import Img_Catcher from '~/assets/DreamCatcher.png'
import Img_BlackSky from '~/assets/blacksky.png'

import audioSrc from '~/assets/bgm.mp3'

const vRef = ref<HTMLAudioElement>()
const router = useRouter()

onMounted(() => {})

// @ts-expect-error something wrong
const s = new C3D.Stage()
// @ts-expect-error something wrong
const a = new C3D.Stage()

a.size(window.innerWidth, window.innerHeight)
  .material({
    image: Img_BlackSky,
    repeat: 'no-repeat',
    bothsides: false,
  })
  .update()
document.body.appendChild(a.el)

// @ts-expect-error something wrong
const sp4a = new C3D.Sprite()
sp4a.position(10, -50, -1000).update()
a.addChild(sp4a)

// @ts-expect-error something wrong
const p4a = new C3D.Plane()
p4a
  .size(280, 334)
  .position(0, 0, 0)
  .material({
    image: Img_Circle,
    repeat: 'no-repeat',
    bothsides: false,
  })
  .buttonMode(true)
  .update()
sp4a.addChild(p4a)

// @ts-expect-error something wrong
const sp4a1 = new C3D.Sprite()
sp4a1.position(10, -70, -1000).update()
a.addChild(sp4a1)

// @ts-expect-error something wrong
const p4a1 = new C3D.Plane()
p4a1
  .size(40, 40)
  .position(0, 0, 0)
  .material({
    image: Img_Play,
    repeat: 'no-repeat',
    bothsides: false,
  })
  .buttonMode(true)
  .update()
sp4a1.addChild(p4a1)

sp4a1.on('click', () => {
  // eslint-disable-next-line no-console
  console.log('click')
  buildSecond()

  if (vRef.value)
    vRef.value.autoplay = true
  vRef.value?.play()
})

// ---------------------------
// @ts-expect-error something wrong
const sp4a2 = new C3D.Sprite()
sp4a2.position(0, 370, -700).update()
a.addChild(sp4a2)

// @ts-expect-error something wrong
const p4a2 = new C3D.Plane()
p4a2
  .size(window.innerWidth, 270)
  .position(60, 0, 0)
  .material({
    image: Img_9112,
    repeat: 'no-repeat',
    bothsides: false,
  })
  .buttonMode(true)
  .update()
sp4a2.addChild(p4a2)

function buildSecond() {
  // @ts-expect-error something wrong
  s.size(window.innerWidth, window.innerHeight)
    .material({
      color: '#000000',
    })
    .update()
  document.body.appendChild(s.el)

  // 创建一个三维容器（创建以方便分组使用）
  // @ts-expect-error something wrong
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
    { url: Img_DreamTxt },
    { url: Img_Catcher },
  ]

  setTimeout(() => {
    // @ts-expect-error something wrong
    const spa = new C3D.Sprite()
    spa.position(0, 0, -500).update()
    s.addChild(spa)

    // 911 Move
    // @ts-expect-error something wrong
    const pa = new C3D.Plane()
    pa.size(window.innerWidth, window.innerHeight)
      .position(0, 0, 0)
      .material({
        image: Img_Road,
        repeat: 'round',
        bothsides: false,
      })
      .buttonMode(true)
      .update()
    spa.addChild(pa)

    function moveaaB() {
      spa.move(0, 10, 5).updateT()
      spa.scale(1, 1, 1).updateT()
      requestAnimationFrame(moveaaB)
    }

    requestAnimationFrame(moveaaB)
  }, 1000)

  // 911 Move
  // @ts-expect-error something wrong
  const p = new C3D.Plane()
  p.size(150, 70)
    .position(20, 0, 0)
    .material({
      image: bgDaa[0].url,
    })
    .buttonMode(true)
    .update()
  sp.addChild(p)

  function moveA() {
    sp.move(0, -10, 5).updateT()
    sp.scale(1.3, 1.3, 1.3).updateT()
    requestAnimationFrame(moveA)
  }

  requestAnimationFrame(moveA)

  // ================================
  setTimeout(() => {
    // @ts-expect-error something wrong
    const sp2 = new C3D.Sprite()
    sp2.position(0, 0, -500).update()
    s.addChild(sp2)

    // @ts-expect-error something wrong
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
      sp2.move(0, 10, 5).updateT()
      sp2.scale(0.4, 0.4, 0.4).updateT()
      requestAnimationFrame(moveB)
    }

    requestAnimationFrame(moveB)
  }, 1000)

  setTimeout(() => {
    // @ts-expect-error something wrong
    const sp3 = new C3D.Sprite()
    sp3.position(10, -50, -1000).update()
    s.addChild(sp3)

    // 911 Move
    // @ts-expect-error something wrong
    const p3 = new C3D.Plane()
    p3.size(150, 70)
      .position(0, -90, 0)
      .material({
        image: bgDaa[6].url,
        repeat: 'no-repeat',
        bothsides: false,
      })
      .buttonMode(true)
      .update()
    sp3.addChild(p3)

    function moveC() {
      sp3.move(0, 0, 25).updateT()
      sp3.scale(1.5, 1.5, 1.5).updateT()
      requestAnimationFrame(moveC)
    }

    requestAnimationFrame(moveC)
  }, 3000)

  setTimeout(() => {
    // @ts-expect-error something wrong
    const sp4 = new C3D.Sprite()
    sp4.position(10, -550, -1000).update()
    s.addChild(sp4)

    // @ts-expect-error something wrong
    const p4 = new C3D.Plane()
    p4.size(250, 334)
      .position(0, 0, 0)
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
      sp4.scale(0.3, 0.3, 0.3).updateT()
      requestAnimationFrame(moveD)
    }

    const bgDom = document.getElementById('bg')
    if (bgDom)
      bgDom.style.display = ''

    requestAnimationFrame(moveD)
  }, 12000)

  setTimeout(() => {
    // @ts-expect-error something wrong
    const sp5 = new C3D.Sprite()
    sp5.position(0, -200, -1000).update()
    s.addChild(sp5)

    // @ts-expect-error something wrong
    const p5 = new C3D.Plane()
    p5.size(180, 54)
      .position(0, 0, 0)
      // .rotation(10, 20, 0)
      .material({
        image: bgDaa[8].url,
        repeat: 'no-repeat',
        bothsides: false,
      })
      .buttonMode(true)
      .update()
    sp5.addChild(p5)

    function moveE() {
      // sp4.rotate(0, 5, 0).updateT()
      sp5.move(0, 0, 25).updateT()
      sp5.scale(1.8, 1.8, 1.8).updateT()

      requestAnimationFrame(moveE)
    }

    requestAnimationFrame(moveE)
  }, 4000)

  // 创建20个平面放入容器，并定义鼠标事件
  setTimeout(() => {
    // @ts-expect-error something wrong
    const sp7 = new C3D.Sprite()
    sp7.position(0, -200, -1000).update()
    s.addChild(sp7)

    for (let i = 0; i < 20; i++) {
      // @ts-expect-error something wrong
      const p = new C3D.Plane()
      p.size(100)
        .position(
          Math.random() * 500 - 250,
          Math.random() * 500 - 250,
          Math.random() * 500 - 250,
        )
        .rotation(
          Math.random() * 300 - 150,
          Math.random() * 300 - 150,
          Math.random() * 300 - 150,
        )
        .material({
          color: C3D.getRandomColor(),
        })
        .buttonMode(true)
        .update()
      sp7.addChild(p)
    }

    function go() {
      // sp4.rotate(0, 5, 0).updateT()
      sp7.rotate(0, 0, 5).updateT()
      sp7.move(0, 20, 0).update()
      requestAnimationFrame(go)
    }

    requestAnimationFrame(go)
  }, 6000)

  // ------------------
  setTimeout(() => {
    // @ts-expect-error something wrong
    const sp6 = new C3D.Sprite()
    sp6.position(0, 200, -1000).update()
    s.addChild(sp6)

    // @ts-expect-error something wrong
    const p6 = new C3D.Plane()
    p6.size(window.innerWidth, window.innerHeight)
      .position(0, 0, 0)
      .material({
        image: bgDaa[9].url,
        repeat: 'no-repeat',
        bothsides: false,
      })
      .buttonMode(true)
      .update()
    sp6.addChild(p6)

    function moveG() {
      sp6.rotate(0, 4, 0).updateT()
      sp6.move(0, 0, 15).updateT()
      sp6.scale(1.3, 1.3, 1.3).updateT()

      requestAnimationFrame(moveG)
    }

    requestAnimationFrame(moveG)
  }, 9000)
  // -----------------

  // ========================
  setTimeout(() => {
    s.size(window.innerWidth, window.innerHeight)
      .material({
        image: Img_Road,
        repeat: 'round',
        bothsides: false,
      })
      .update()
  }, 11000)
}
function startDream() {
  document.body.removeChild(a.el)
  document.body.removeChild(s.el)
  router.push('/')
}
</script>

<template>
  <audio ref="vRef" controls autoplay>
    <source type="audio/mp3" :src="audioSrc">
  </audio>
  <div v-show="false" id="bg" class="bg">
    <div animate-fade-in>
      <img src="../assets/dream-txt.png">
    </div>

    <div mt-22 fccc flex gap-2 text-16px @click="startDream">
      <div animate-bounce text-48px font-ab c-red>
        <!-- <img src="../assets/run.png"> -->
        Run!!!
      </div>
    </div>

    <div class="logo-area" mt-14 fccc gap-2 font-porsche>
      <div i-porsche-logo h-2 w-28 />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  color: #fff;
  position: absolute;
  z-index: 9;
  top: 28%;
  text-align: center;
  width: 100%;
  font-size: 48px;
}
.logo-area {
  position: absolute;
  z-index: 9;
  text-align: center;
  width: 100%;
  top: -240px;
}
</style>
