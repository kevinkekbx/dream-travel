export const formatPriceNum = (num: number, diget = 0, prefix?: string, suffix?: string): string => (prefix ?? '') + Number(num).toFixed(diget).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (suffix ?? '')

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
