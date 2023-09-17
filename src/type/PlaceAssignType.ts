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
  x: string
  pixiv: string
  web: string
}

export interface PastGaisyuInfo {
  circlename: string
  best: string
  konzatsu: string
}

export interface SortedThisPlaceAssign extends ThisPlaceAssign {
  id: number
  spaceId: string
  circlenameId: number
  pennameId: number
}
