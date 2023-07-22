export const usePath = () => {
  // setup直下でしか使えないので注意
  const router = useRouter()

  const addFilterPath = async (to: string) => {
    await router.push(makeFilterPath(to))
  }

  const addKeywordPath = async (to: string) => {
    await router.push(makeKeywordPath(to))
  }

  const addFavoritePath = async (to: string) => {
    await router.push(makeFavoritePath(to))
  }

  const makeFilterPath = (to: string) => {
    return { path: '/search', query: { filter: to } }
  }

  const makeKeywordPath = (to: string) => {
    return { path: '/search', query: { keyword: to } }
  }

  const makeFavoritePath = (to: string) => {
    return { path: '/search', query: { favorite: to } }
  }

  return {
    addFilterPath,
    addKeywordPath,
    addFavoritePath,
    makeFilterPath,
    makeKeywordPath,
    makeFavoritePath,
  }
}
