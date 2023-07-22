export const change = (state: Ref<boolean>) => () => !state

export const hamburgerToggle = () => {
  const isToggle = useState('isToggle', () => false)
  return {
    isToggle: readonly(isToggle),
    change: change(isToggle),
  }
}
