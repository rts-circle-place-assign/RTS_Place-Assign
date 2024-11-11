type kaikiStore = {
  theDay: number
  kaikiJa: string
  kaikiEn: string
}

export const useKaikiStore = () => {
  const state = useState<kaikiStore>('kaiki', () => ({
    theDay: 20250323,
    kaikiJa: '第二回博麗神社例大祭 in 静岡',
    kaikiEn: 'SRTS2',
  }))
  return {
    state: readonly(state),
  }
}
