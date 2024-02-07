type kaikiStore = {
  theDay: number
  kaikiJa: string
  kaikiEn: string
}

export const useKaikiStore = () => {
  const state = useState<kaikiStore>('kaiki', () => ({
    theDay: 20240503,
    kaikiJa: '第二十一回博麗神社例大祭',
    kaikiEn: 'RTS21',
  }))
  return {
    state: readonly(state),
  }
}
