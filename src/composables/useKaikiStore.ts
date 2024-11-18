type kaikiStore = {
  theDay: number
  kaikiJa: string
  kaikiEn: string
}

export const useKaikiStore = () => {
  const state = useState<kaikiStore>('kaiki', () => ({
    theDay: 20241020,
    kaikiJa: '第十一回博麗神社秋季例大祭',
    kaikiEn: 'ARTS11',
  }))
  return {
    state: readonly(state),
  }
}
