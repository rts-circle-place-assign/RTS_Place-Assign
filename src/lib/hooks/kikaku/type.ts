export interface kaikiPlaceAssign {
  [key: string]: PlaceAssign[]
}

export interface PlaceAssign {
  space: string
  circlename: string
  penname: string
}

export interface CirclePAData {
  kaiki: string
  space: string
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
  code: string // RTS20学割照合用コード
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
  midashi: string
  key: string
}

export interface CutInfo {
  width: number
  height: number
}

export interface FriendCodeInfo {
  code: string
  count: number
  circles: Circle[]
  different: boolean
  codeDifferent: boolean
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
}

export interface PastGaisyuInfo {
  circlename: string
  best: string
  konzatsu: string
}

export interface SortedSakuhinForCount {
  id: string
  sakuhincode: string | undefined
  sakuhin: string
  mediacode: number
  media: string
  adultNum: number
  spNum: number
  forSort: string
  pink: number
  orange: number
  yellow: number
  green: number
  other: number
  adjust: number
  jiko: number
}

export interface SortedSakuhinForRTDB {
  [key: string]: SortedSakuhinForCount
}

export interface CatalogInfo {
  rank: number
  space: string
  circlename: string
}

export interface StudentDiscountData {
  mail: string
  circlename: string
  penname: string
  plan: string
  code: string
}

export type FormsKikakuShort = {
  title: string
  title_phonetic: string
  title_english: string
  org_name: string
  org_name_phonetic: string
  org_name_prefix: string
  org_name_english_prefix: string
  org_name_english: string
}

export type FormsKikaku = FormsKikakuShort & {
  title_phonetic: string
  org_name_phonetic: string
}

export type PrInternal = {
  midokoro: boolean
  acd: boolean
}

export type PrCategory =
  | '人文社会科学'
  | '自然科学'
  | '受験'
  | '音楽'
  | 'ダンス'
  | '実演'
  | 'ゲーム・パズル'
  | '創作'
  | '地域・伝統'
  | '映画'
  | '軽食'
  | 'スイーツ'
  | '飲み物'

export type PrSubCategory = PrCategory | '総合' | 'その他' | ''

export type FormsPr = {
  category_main: PrCategory | null
  category_sub: PrSubCategory | '' | null
}

export type LinkKind =
  | 'ウェブサイト'
  | 'Twitter'
  | 'YouTube'
  | 'Facebook'
  | 'Instagram'
  | 'その他SNS'
  | ''

export type Link = {
  kind: LinkKind | ''
  kind_other: string
  kind_other_en: string
  url: string
}

export type Caution = {
  caution_other: string
  caution_other_en: string
}

export type Reservation = {
  url: string
  description: string
  description_en: string
}

export type Sublinks = {
  url: string
  description: string
  description_en: string
}

export type ServiceName =
  | 'YouTube'
  | 'Zoom'
  | 'note'
  | 'BASE'
  | 'Google Drive'
  | '自団体のウェブサイト'
  | 'その他の外部サービス'

export type LocaleDate = '13日（土）' | '14日（日）' | '両日'

export type Schedule = {
  title: string
  title_en: string
  service: ServiceName
  service_other: string
  service_other_en: string
  url: string
  date?: LocaleDate
  fulltime: boolean
  start_time: string
  end_time: string
  link_start_time: string
  link_end_time: string
}

export type ContentsCaution = {
  caution_no_exit: boolean
  caution_cancelled_in_rain: boolean
  caution_has_subtitles: boolean
  caution_record: boolean
  caution_photo: boolean
  caution_video: boolean
}

export type SubEvent = ContentsCaution & {
  name: string
  name_en: string
  description: string
  description_en: string
  caution_others: Caution[]
  reservation_url: string
  reservation_description: string
  reservation_description_en: string
  schedule: Schedule[]
  sublinks: Sublinks[]
}

export type FormsWebShort = {
  thumbnail: string
  catchcopy: string
  catchcopy_en: string
}

export type FormsWeb = FormsWebShort & {
  image_array: string[]
  kikaku_description: string
  kikaku_description_en: string
  org_description: string
  org_description_en: string
  links: Link[]
  keywords: string[]
  contents?: SubEvent[]
}

export type OnsiteData = {
  place: string | null
  date: LocaleDate | null
  fulltime: boolean | null
  open: string | null
  start_time: string | null
  end_time: string | null
}

export type OnsiteCaution = {
  caution_enter_exit: boolean | null
  caution_limit_enter_exit: boolean | null
  caution_cancelled_in_rain: boolean | null
  caution_record: boolean | null
  caution_photo: boolean | null
  caution_with_online: boolean | null
  caution_alcohol: boolean | null
  caution_ticket: boolean | null
}

export type FormsOnsite = OnsiteCaution & {
  caution_ticket_place: string | null
  caution_other: string | null
}

export type NormalizedSchedule = Schedule & {
  end_date: Exclude<LocaleDate, '両日'>
  start_date: Exclude<LocaleDate, '両日'>
}

export type MfaInfo = {
  mfa_receive: boolean
}

export type Wh = {
  place: string
  time: string
}

export type Map = {
  id_web: number
  building_name: string
  floor_name: string
}

export type KikakuTable = {
  id: number
  type: string
  kikaku: FormsKikaku
  pr_internal: PrInternal
  pr: FormsPr
  web: FormsWeb
  onsite?: FormsOnsite
  mfa: MfaInfo
  when_where?: Wh[]
}

export type kikakuCard = {
  id: number
  type: string
  kikaku: FormsKikakuShort
  pr_internal: PrInternal
  pr: FormsPr
  web?: FormsWebShort
  map?: Map[]
}
