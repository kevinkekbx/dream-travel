<script lang='ts' setup>
import qs from 'query-string'
import { showSuccessToast, showToast } from 'vant'

const route = useRoute()
const { type = 'SIGN_UP' } = route.query

// 报名审核 SIGN_UP
// 梦想基金审核 DREAM_FUND
// 试炼审核 TRIAL

interface User {
  age: number
  createDate: number
  dreamCar: string
  dreamerType: string
  email: string
  goldenIdea: string
  id: number
  nickName: string
  phone: string
  status: number
}

const typeEnum = ref({
  SIGN_UP: '报名审核',
  DREAM_FUND: '梦想基金审核',
  TRIAL: '试炼审核',
})
const _type = type as keyof typeof typeEnum
// @ts-expect-error something wrong
const title = computed(() => typeEnum.value[_type])

const list = ref<User[]>([])

async function fetchSignUpList() {
  const { data } = await useFetch('http://13.229.212.95:8080/dreamer/list?page=0&size=0').post().json()
  if (data.value)
    list.value = (data.value?.data?.list || []).reverse()
}

onMounted(async () => {
  if (type === 'SIGN_UP')
    fetchSignUpList()
  else if (type === 'DREAM_FUND')
    fetchSignUpList()
  else if (type === 'TRIAL')
    fetchSignUpList()
})

async function rejectIt(u: User) {
  if (type === 'SIGN_UP') {
    const model = {
      dreamerId: u.id,
      status: 2,
    }
    const url = `http://13.229.212.95:8080/dreamer/handleApply?${qs.stringify(model)}`
    const { data } = await useFetch(url).post().json()
    if (data.value.code === 200) {
      showSuccessToast('操作成功')
      fetchSignUpList()
    }
    else { showToast(data.value.message) }
  }
}

async function resolveIt(u: User) {
  if (type === 'SIGN_UP') {
    const model = {
      dreamerId: u.id,
      status: 1,
    }
    const url = `http://13.229.212.95:8080/dreamer/handleApply?${qs.stringify(model)}`
    const { data } = await useFetch(url).post().json()
    if (data.value.code === 200) {
      showSuccessToast('操作成功')
      fetchSignUpList()
    }
    else { showToast(data.value.message) }
  }
}
</script>

<template>
  <div bg="#eeeff2" min-h-screen px-6 py-10 pt-18 font-porsche text-primary>
    <h3 text-2xl>
      Porsche Young Dream
      <br>
      {{ title }}
    </h3>
    <div mt-7.5 fccc gap-3>
      <div v-for="u in list" :key="u.id" w-full rd-1 bg-white p-4 :class="u.status !== 0 ? 'op-50' : ''">
        <div fbc gap-2 text-lg fw-700>
          <div>
            <span>{{ u.nickName }}</span>
            <span mx-1 fw-normal>|</span>
            <span>{{ u.dreamerType }}</span>
          </div>
          <span>梦想车型：{{ u.dreamCar }}</span>
        </div>
        <div op-50>
          {{ u.email }}
          <br>
          {{ u.phone }}
        </div>
        <div my-4 w-full flex>
          {{ u.goldenIdea }}
        </div>
        <div fcc gap-2>
          <van-button :disabled="u.status !== 0" color="#040609" square plain block type="primary" @click="rejectIt(u)">
            忽略
          </van-button>
          <van-button :disabled="u.status !== 0" color="#040609" square block type="primary" @click="resolveIt(u)">
            通过
          </van-button>
        </div>
      </div>
    </div>
  </div>
</template>
