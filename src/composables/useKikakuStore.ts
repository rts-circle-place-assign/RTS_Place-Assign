import { Circle } from '../lib/hooks'

type kikakuStore = {
  kikaku: Circle[]
}

export const useKikakuStore = () => {
  const state = useState<kikakuStore>('kikakuIds', () => ({
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
