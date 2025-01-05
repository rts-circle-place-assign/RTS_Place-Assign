import mongoose from 'mongoose'
import { ITodo } from '~/server/types/'

const schema = new mongoose.Schema<ITodo>(
  {
    item: {
      type: String,
      required: [true, 'Item field is required.'],
      trim: true,
      // No special characters are allowed. (upper and lower case), spaces, punctuation marks, and numbers only.
      // validate: {
      //     validator: function (v: string) {
      //         return /^[a-zA-Z0-9\s\p{P}]+$/.test(v)
      //     },
      //     message: 'Special characters are not allowed.'
      // },
      // maxlength: [20, 'Max of 20 characters only.']
    },
    kikakuId: {
      type: Number,
      required: [true, 'kikakuId is required.'],
    },
  },
  { timestamps: true }
)

export default mongoose.model<ITodo>('arts11', schema)
