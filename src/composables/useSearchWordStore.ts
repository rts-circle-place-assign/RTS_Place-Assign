type SearchWordState = {
  word: string
}

export const useSearchWordStore = () => {
  const state = useState<SearchWordState>('searchWord', () => ({
    word: '',
  }))
  return {
    state: readonly(state),
    setWord: setWord(state),
  }
}

const setWord = (state: Ref<SearchWordState>) => {
  return (word: string) => (state.value.word = word)
}
