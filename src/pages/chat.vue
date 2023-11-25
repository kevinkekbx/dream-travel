<script lang='ts' setup>
import { showToast } from 'vant'

interface MessageItem {
  type: string
  content: string
  show: boolean
  id: number
}

const loading = ref(false)

const welcome = {
  type: 'robot',
  content: 'Welcome to Porsche Young Dream ChatGPT!',
  show: true,
  id: Date.now(),
}

const historyList = useLocalStorage<MessageItem[]>('chat-list', [welcome])

const input = ref('')

async function handleSend() {
  if (input.value && !loading.value) {
    const _input = input.value
    input.value = ''
    historyList.value.push({
      type: 'user',
      content: _input,
      show: true,
      id: Date.now(),
    })

    // 页面smooth滚动到最底部
    nextTick(() => {
      const dom = document.querySelector('.layout')
      if (dom) {
        dom.scrollTo({
          top: dom.scrollHeight - dom.clientHeight,
          behavior: 'smooth',
        })
      }
    })

    await fetchReply(_input)
  }
}

async function fetchReply(question: string) {
  loading.value = true

  let content = ''

  const url = `http://150.158.43.244:8080/mock/ai/qa?question=${encodeURIComponent(question)}`
  const { data } = await useFetch(url).post().json()
  content = data.value.data.data

  historyList.value.push({
    type: 'robot',
    content,
    show: true,
    id: Date.now(),
  })

  loading.value = false
}

function handleCopy(content: string) {
  const { copy, isSupported } = useClipboard({ source: content })
  if (isSupported.value) {
    copy()
    showToast({ message: '复制成功', type: 'success' })
  }
}
</script>

<template>
  <div pr h-screen of-scroll pb-15 class="layout">
    <div px-4 py-6>
      <div text-primary space-y-2 dark:text-white>
        <div v-for="item in historyList" :key="item.content" w-full flex :class="[item.type === 'user' ? 'justify-end' : 'justify-start', item.show ? '' : 'hidden!']">
          <div max-w-fit w-fit class="" b px-4 py-3 :class="item.type === 'user' ? 'op-100 rd-50px' : 'op-70 rd-4'" @click="handleCopy(item.content)">
            {{ item.content }}
          </div>
        </div>
        <div v-show="loading" class="rd-50px" max-w-fit w-fit fcc b px-4 py-3 text-primary dark:text-white>
          <span animate-pulse>Thinking</span>
          <div animate-fade-out-right animate-delay-100 text-red important-animate-count-infinite>
            ·
          </div>
          <div animate-fade-out-right animate-delay-200 text-blue important-animate-count-infinite>
            ·
          </div>
          <div animate-fade-out-right animate-delay-300 text-teal important-animate-count-infinite>
            ·
          </div>
          <div animate-fade-out-right animate-delay-100 text-red important-animate-count-infinite>
            ·
          </div>
          <div animate-fade-out-right animate-delay-200 text-blue important-animate-count-infinite>
            ·
          </div>
          <div animate-fade-out-right animate-delay-300 text-teal important-animate-count-infinite>
            ·
          </div>
        </div>
      </div>
    </div>
    <div pf bottom-0 h-15 w-full fcc gap-2 b-t px-4 backdrop-blur class="inputGroup">
      <van-field v-model="input" b rd-full bg-white dark:bg-primary dark-text-white />
      <div aspect-square class="h-11.5" fcc shrink-0 b rd-full :class="loading ? 'op-50' : ''" @click="handleSend">
        <span i-ic-baseline-send />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.inputGroup{
  --van-field-input-text-color: black;
}

.dark .inputGroup{
  --van-field-input-text-color: white;
}
.van-field__control{
  --van-field-input-text-color: black;
}

.dark .van-field__control{
  --van-field-input-text-color: white;
}
</style>
