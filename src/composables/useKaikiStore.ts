type kaikiStore = {
  theDay: number
  kaikiJa: string
  kaikiEn: string
}

export const useKaikiStore = () => {
  const state = useState<kaikiStore>('kaiki', () => ({
    theDay: 20250505,
    kaikiJa: '第二十二回博麗神社例大祭',
    kaikiEn: 'RTS22',
  }))
  return {
    state: readonly(state),
  }
}
