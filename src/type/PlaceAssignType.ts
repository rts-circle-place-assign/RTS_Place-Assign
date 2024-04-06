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
  circlenameId: string
  pennameId: string
}

export interface PlaceAssignMaster {
  rtsId?: string
  block: string
  number: number
  ab: string
  circlename: string
  circlenamekana: string
  penname: string
  pennamekana: string
  web: string
  pixiv?: string
  twitter?: string
  cutId?: number
}

export interface SpaceLabelData {
  block: string
  number: string
  ab: string
  forSort: string
  circlename: string
  cutId: string
  desk: string
}
