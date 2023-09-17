export interface TansekiNum {
  thisnum: string
  nextnum: string
}

export interface BlockTansekiData {
  direction: string
  block: string[]
  num: TansekiNum[]
  digiana: boolean
}

export interface BlockKaikiData {
  kaiki: string
  tanseki: BlockTansekiData[]
}

export interface Gaisyu {
  kaiki: string
  tanseki: Tanseki[]
  kabeBlock: string[]
}

export interface Tanseki {
  num: number[]
  block: string[]
}
