import { DateTime } from 'luxon'

export const useKaikiStore = () => {
  const theDay = useState('theDay', () => DateTime.local(2023, 5, 7, 10, 30, 0))
  const kaikiJa = useState('kaikiJa', () => '第二十回博麗神社例大祭')
  const kaikiEn = useState('kaikiEn', () => 'RTS20')
  return {
    theDay: readonly(theDay),
    kaikiJa: readonly(kaikiJa),
    kaikiEn: readonly(kaikiEn),
  }
}
