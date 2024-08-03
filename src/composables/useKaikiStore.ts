type kaikiStore = {
  theDay: number
  kaikiJa: string
  kaikiEn: string
  kaikiEn: string
}

export const useKaikiStore = () => {
  const state = useState<kaikiStore>('kaiki', () => ({
    theDay: 20240503,
    kaikiJa: '第十一回博麗神社秋季例大祭',
    kaikiEn: 'ATS11',
  }))
  return {
    state: readonly(state),
  }
}
