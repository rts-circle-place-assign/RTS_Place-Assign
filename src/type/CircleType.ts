export interface kaikiPlaceAssign {
  [key: string]: PlaceAssign[]
}

export interface PlaceAssign {
  space: string
  circlename: string
  penname: string
}

export interface CirclePAData {
  kaiki: string,
  space: string,
  gaisyu: string
}

export interface Circle {
  id: number
  cutId?: string
  cutwidth: number
  cutheight: number
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
  web?: string
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
  phone?: string
  doujinhanbai?: string
  purpose?: string
  funold?: string
  youbou?: string
  uketukenum?: number
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
  code: string //RTS20学割照合用コード
}

export interface GattaiProcess {
  midashi?: string
  thiscricle?: string
}

export interface HanpuData {
  name: string
  ProcessedDate: number | string
  ProcessedPrice: number | string
  ProcessedAmount: number | string
}

export interface SpaceSet {
  num: number
  space: string
}
export interface GtSet {
  midashi: string
  key: string
}

export interface SakuhinSet {
  code: string
  sakuhin: string
}

export interface MediaSet {
  code: number
  media: string
}

export interface Tanseki {
  num: number[]
  block: string[]
}

export interface Gaisyu {
  kaiki: string
  tanseki: Tanseki[]
  kabeBlock: string[]
}

export interface JointInfo {
  midashi: string,
  key: string
}

export interface CutInfo {
  width: number,
  height: number
}

export interface FriendCodeInfo {
  code: string,
  count: number,
  circles: Circle[],
  different: boolean,
  codeDifferent: boolean,
}

export interface CircleMinInfo {
  id: number,
  circlename: string,
  penname: string,
  mediacode: number,
  sakuhincode: string,
  seijin: number,
}

export interface PlaceAssignBaseInfo {
  id: number;
  circlename: string;
  penname: string;
  sakuhincode: string;
  mediacode: number;
  seijin: number;
  amount: number;
  web: string | undefined;
  pixiv: string | undefined;
  twitter: string | undefined;
  spnum: number;
  forSort: string;
}

export interface PastGaisyuInfo {
  circlename: string;
  best: string;
  konzatsu: string;
}

export interface SortedSakuhinForCount {
  id: string,
  sakuhincode: string | undefined,
  sakuhin: string,
  mediacode: number,
  media: string,
  adultNum: number,
  spNum: number,
  forSort: string,
  pink: number,
  orange: number,
  yellow: number,
  green: number,
  other: number,
  adjust: number,
  jiko: number
}

export interface SortedSakuhinForRTDB {
  [key: string]: SortedSakuhinForCount
}

export interface CatalogInfo {
  rank: number,
  space: string,
  circlename: string
}

export interface StudentDiscountData {
  mail: string,
  circlename: string,
  penname: string,
  plan: string,
  code: string
}
