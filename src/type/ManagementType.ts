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

export interface SakuhinRecord {
  sakuhincode: string | undefined
  sakuhin: string
  mediacode: number
  media: string
  adultNum: number
  adult: string
  forSort: string
  friendSpNum: number
  notFriendSpNum: number
}
