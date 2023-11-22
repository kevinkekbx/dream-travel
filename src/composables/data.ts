export const global_step = ref(1)
export const selectedCarIndex = ref(1)
export const selectedCatModel = computed(() => carsMap[selectedCarIndex.value])

export const test_mode = ref(true)

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
