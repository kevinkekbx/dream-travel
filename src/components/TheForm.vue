<script lang='ts' setup>
import qs from 'query-string'
import { showSuccessToast, showToast } from 'vant'

const name = ref('')
const type = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')
const selectIndex = ref(0)

const router = useRouter()

const loading = ref(false)

async function onSubmit(values: any) {
  loading.value = true
  const model = {
    ...values,
    carIndex: selectIndex.value,
  }

  // eslint-disable-next-line no-console
  console.log(model, 'model')

  Object.keys(model).forEach((key) => {
    // eslint-disable-next-line ts/ban-ts-comment
    // @ts-expect-error
    userModel.value[key] = model[key]
  })

  const modelForm: any = {
    age: '10',
    dreamCar: carsMap[model.carIndex].name,
    dreamerType: model.type,
    email: model.email,
    goldenIdea: model.message,
    nickName: model.name,
    phone: model.phone,
  }

  const str = qs.stringify(modelForm)

  const url = `http://150.158.43.244:8080/dreamer/submit?${str}`

  try {
    const { data, error } = await useFetch(url).post().json()

    if (data.value.code === 200) {
      const id = data.value.data.id
      const status = data.value.data.status

      userModel.value.carIndex = model.carIndex
      userModel.value.id = id
      userModel.value.status = status
      userModel.value.name = model.name
      userModel.value.type = model.type
      userModel.value.email = model.email
      userModel.value.phone = model.phone
      userModel.value.message = model.message

      showSuccessToast('报名成功， 请等待审核')
      setTimeout(() => {
        router.push('/result')
      }, 1000)
    }
    else {
      showToast(data.value.message)
    }

    if (error.value)
      showToast(error.value.message)
  }
  finally {
    loading.value = false
  }
}

const showPicker = ref(false)
const columns = [
  { text: '大学生', value: 'student' },
  { text: '老师', value: 'teacher' },
  { text: '其他', value: 'other' },
]
function onConfirm(item: any) {
  const { selectedOptions } = item
  type.value = selectedOptions[0]?.text
  showPicker.value = false
}
</script>

<template>
  <div pb-4 pt-10 font-porsche text-primary>
    <div px-5>
      <h3 text="2xl">
        报名young dream
        <br>
        开启梦想
      </h3>
      <!-- <p mt-3 op-50>
        报名介绍文案报名介绍文案报名介绍文案报名介绍文案报名介绍文案报名介绍文案报名介绍文案报
      </p> -->
    </div>
    <div mt-8 px-2>
      <van-form class="form-reset" @submit="onSubmit">
        <van-cell-group inset title="基本信息" class="text-porsche!">
          <van-field
            v-model="name"
            name="name"
            placeholder="您的名字"
            :rules="[{ required: true, message: '请输入您的名字' }]"
          />
          <van-field
            v-model="type"
            readonly
            name="type"
            placeholder="您的身份"
            :rules="[{ required: true, message: '请选择您的身份' }]"
            @click="showPicker = true"
          />
        </van-cell-group>
        <div h-8 />
        <van-cell-group inset title="联系方式">
          <van-field
            v-model="email"
            name="email"
            placeholder="邮箱"
            :rules="[
              { required: true, message: '请输入您的邮箱' },
              { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: '请输入正确的邮箱格式' },
            ]"
          />
          <van-field
            v-model="phone"
            name="phone"
            placeholder="手机号"
            maxlength="11"
            :rules="[
              { required: true, message: '请输入您的手机号' },
              { pattern: /^1\d{10}$/, message: '请输入正确的手机号' },
            ]"
          />
        </van-cell-group>
        <div h-8 />
        <van-cell-group inset title="选择您的梦想车型">
          <div class="noscroll" w-full of-scroll px-0.5 py-1>
            <div w-fit flex gap-2>
              <div
                v-for="(car, idx) in carsMap" :key="car.name" h-24.5 w-45 shrink-0 rd-1 bg-cover
                :class="selectIndex === idx ? 'ring-2 ring-primary' : ''"
                :style="{
                  backgroundImage: `url(${car.img})`,
                }"
                @click="selectIndex = idx"
              />
            </div>
          </div>
        </van-cell-group>
        <div h-8 />
        <van-cell-group inset title="想法">
          <div b="~ black op-40" rd-1 p-2>
            <van-field
              v-model="message"
              name="message"
              rows="2"
              autosize
              type="textarea"
              maxlength="200"
              placeholder="输入您的想法..."
              show-word-limit
            />
          </div>
        </van-cell-group>
        <div mt-12 px-4>
          <van-button :loading="loading" color="#040609" block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
    <van-popup v-model:show="showPicker" position="bottom">
      <van-picker
        :columns="columns"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
  </div>
</template>

<style lang='scss' scoped>
.noscroll{
  &::-webkit-scrollbar {
    display: none;
  }
}
.form-reset{
  --van-cell-horizontal-padding: 0px;
  --van-cell-vertical-padding: 0px;
  --van-cell-group-title-color: #010205;
  --van-cell-group-title-font-size: 16px;
  --van-cell-group-inset-radius: 0;
}

:deep(.van-cell-group){
  .van-field{
    &:first-child{
      input{
        margin-top: 0px;
      }
    }

    &::after{
      display: none !important;
    }
  }
}

:deep(.van-field){
  input {
    border: 1px solid rgba(0 0 0 / 0.4) !important;
    padding: 12px !important;
    border-radius: 4px !important;
    margin-top: 12px;
    overflow: visible;

    &::placeholder{
      color: rgba(0 0 0 / 0.4) !important;
    }
  }
}

:deep(.van-cell-group__title){
  font-weight: 600;
}
</style>
