export interface Media {
  code: number
  media: string
  adult?: number
}

export interface MediaRecord {
  code: number
  spNum: number
  media: string
  adult: string
  adultNum: string | number
  class: string
}
