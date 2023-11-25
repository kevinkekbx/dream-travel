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

const defaultUserModel = {
  name: '',
  email: '',
  phone: '',
  carIndex: 0,
  message: '',
  type: '',
  id: '',
  status: -2,
}

export const userModel = useLocalStorage('user', defaultUserModel)

export const selectedCarIndex = computed(() => userModel.value.carIndex || 0)
export const selectedCatModel = computed(() => carsMap[selectedCarIndex.value])
