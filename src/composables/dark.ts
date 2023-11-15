export const isDark = useDark()
export const toggleDark = useToggle(isDark)

/**
 * 晚上 8 点到早上 6 点准点自动切换为暗色模式
 *
 * 30 分钟检查一次
 */
export function autoSwitchDark() {
  const hour = new Date().getHours()
  const _isDark = hour >= 20 || hour < 6

  if (hour === 6 && _isDark)
    isDark.value = false

  if (hour === 20 && !_isDark)
    isDark.value = true

  setTimeout(autoSwitchDark, 1000 * 60 * 30)
}
