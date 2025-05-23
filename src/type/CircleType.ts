export interface Circle {
  id: number
  rtsId: string
  msnum?: string
  gattainum?: string
  isSecond: boolean
  friendCode?: string
  circlename: string
  circlenamekana: string
  penname: string
  pennamekana: string
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
  cutId?: string
  spnum: number
}

export interface ResultArr {
  name: string
  circles?: Circle[]
}

export interface BothCircle {
  thisCircle: Circle
  jointCircle: Circle
  different: boolean
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

export interface SakuhinSet {
  code: string
  sakuhin: string
}

export interface FriendCodeInfo {
  code: string
  count: number
  circles: Circle[]
  different: boolean
  codeDifferent: boolean
  jointCircle: Circle | undefined
  isJointOk: boolean
}

export interface CircleMinInfo {
  id: number
  circlename: string
  penname: string
  mediacode: number
  sakuhincode: string
  seijin: number
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

export interface AcceptedCirclesList extends Circle {
  id: number
  circlenameId: string
  pennameId: string
}

export interface GoodsList {
  code: number
  goods: string[]
}

export interface EmailList {
  id: number
  rtsId: string
  email: string
  name: string
}
