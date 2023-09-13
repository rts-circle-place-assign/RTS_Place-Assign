import { Types } from 'mongoose'

export interface ISetResponse {
  statusCode: number
  statusMessage: string
  data?: any
  cause?: any
}

export interface ITodo {
  _id: Types.ObjectId
  item: string
  kikakuId: number
  createdAt: Date
  updatedAt: Date
}

export interface IAllItems extends ISetResponse {
  data: ITodo[]
}
