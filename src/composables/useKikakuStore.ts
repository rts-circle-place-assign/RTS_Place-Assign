import { Circle } from '~/type'

type kikakuStore = {
  kikaku: Circle[]
}

export const useKikakuStore = () => {
  const state = useState<kikakuStore>('kikaku', () => ({
    kikaku: [],
  }))
  return {
    state: readonly(state),
    setKikaku: setKikaku(state),
  }
}

const setKikaku = (state: Ref<kikakuStore>) => {
  return (kikakus: Circle[]) => (state.value.kikaku = kikakus)
}
