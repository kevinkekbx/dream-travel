<script lang='ts' setup>
const name = ref('')
const type = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')
function onSubmit(values: any) {
  // eslint-disable-next-line no-console
  console.log('submit', values)
}
</script>

<template>
  <div px-5 py-4 font-porsche text-primary>
    <h3 text="2xl">
      报名young dream
      <br>
      开启梦想
    </h3>
    <p mt-3 op-50>
      报名介绍文案报名介绍文案报名介绍文案报名介绍文案报名介绍文案报名介绍文案报名介绍文案报
    </p>
    <div mt-8>
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
            name="type"
            placeholder="您的身份"
            :rules="[{ required: true, message: '请选择您的身份' }]"
          />
        </van-cell-group>
        <van-cell-group inset title="联系方式">
          <van-field
            v-model="email"
            name="email"
            placeholder="邮箱"
            :rules="[{ required: true, message: '请输入您的邮箱' }]"
          />
          <van-field
            v-model="phone"
            name="phone"
            placeholder="手机号"
            :rules="[{ required: true, message: '请选择您的手机号' }]"
          />
        </van-cell-group>

        <van-cell-group inset title="备注">
          <van-field
            v-model="message"
            rows="4"
            autosize
            type="textarea"
            maxlength="200"
            placeholder="请畅所欲言您的想法"
            show-word-limit
          />
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button round block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<style lang='scss' scoped>
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
