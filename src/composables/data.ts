export const global_step = ref(1)
export const selectedCarIndex = ref(1)
export const selectedCatModel = computed(() => carsMap[selectedCarIndex.value])
