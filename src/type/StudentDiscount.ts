export interface CircleApplicationSDData {
  rtsId: string
  name: string
  code: string
} // サークル参加申込時に入力された情報（申込者氏名、入力された照合用コード）

export interface SDApplicationData {
  name: string
  code: string
} // 学割申請時に入力された情報（氏名、付与した照合用コード）
