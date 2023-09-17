export interface kaikiPlaceAssign {
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

export interface Circle {
  id: number
  cutId?: string
  circlename: string
  circlenamekana: string
  gattainum?: string
  penname: string
  pennamekana: string
  friendCode?: string
  sakuhincode: string
  mediacode: number
  seijin: number
  hosoku?: string
  web: string
  webok: number
  pixiv?: string
  pixivok: number
  twitter?: string
  twitterok: number
  twitterfollowers: number
  musicgenre?: string
  bookcharacter?: string
  bookgenre?: string
  bookseijingenre?: string
  goodsgenre?: string
  hanpu1name?: string
  hanpu1date?: number
  hanpu1price?: number
  hanpu1amount?: number
  hanpu2name?: string
  hanpu2date?: number
  hanpu2price?: number
  hanpu2amount?: number
  hanpu3name?: string
  hanpu3date?: number
  hanpu3price?: number
  hanpu3amount?: number
  hanpu4name?: string
  hanpu4date?: number
  hanpu4price?: number
  hanpu4amount?: number
  hanpu5name?: string
  hanpu5date?: number
  hanpu5price?: number
  hanpu5amount?: number
  msnum?: string
  spnum: number
  twitterfollownum?: number
  startdate?: number
  starttime?: string
  enddate?: number
  endtime?: string
  coupon?: string
  couponnum?: string
  couponoffprice?: number
  circleid?: number
  agree?: string
  code: string // RTS20学割照合用コード
}

export interface PastGaisyuInfo {
  circlename: string
  best: string
  konzatsu: string
}

export interface StudentDiscountData {
  mail: string
  circlename: string
  penname: string
  plan: string
  code: string
}
