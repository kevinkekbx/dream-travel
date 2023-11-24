export const global_step = ref(1)

export const test_mode = ref(false)

export function handleNextStep(sleep = true, sleepTime = 1500) {
  if (test_mode) {
    if (sleep) {
      setTimeout(() => {
        global_step.value = global_step.value + 1
      }, sleepTime)
    }
    else {
      global_step.value = global_step.value + 1
    }
  }
}

export const userModel = ref({
  name: '',
  email: '',
  phone: '',
  carIndex: 0,
  message: '',
  type: '',
})

export const selectedCarIndex = computed(() => userModel.value.carIndex || 0)
export const selectedCatModel = computed(() => carsMap[selectedCarIndex.value])
