type kaikiStore = {
  theDay: number
  kaikiJa: string
  kaikiEn: string
}

export const useKaikiStore = () => {
  const state = useState<kaikiStore>('kaiki', () => ({
    theDay: 20231112,
    kaikiJa: '第十回博麗神社秋季例大祭',
    kaikiEn: 'ARTS10',
  }))
  return {
    state: readonly(state),
  }
}
