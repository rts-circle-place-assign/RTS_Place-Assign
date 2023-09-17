export interface KaikiPlaceAssign {
  [key: string]: PlaceAssign[]
}

export interface PlaceAssign {
  space: string
  circlename: string
  penname: string
}

export interface ThisPlaceAssign extends PlaceAssign {
  circlenamekana: string
  pennamekana: string
  twitter: string
  pixiv: string
  web: string
}

export interface PastGaisyuInfo {
  circlename: string
  best: string
  konzatsu: string
}

export interface PlaceAssignBaseInfo {
  id: number
  circlename: string
  penname: string
  sakuhincode: string
  mediacode: number
  seijin: number
  amount: number
  web: string | undefined
  pixiv: string | undefined
  twitter: string | undefined
  spnum: number
  forSort: string
  best: string
  konzatsu: string
}
