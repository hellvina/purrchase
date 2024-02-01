import { type Product } from './productModel'

export interface Live {
  belongsToId: string
  title: string
  description: string | null
  image: string
  startDate: Date | string
  finishDate: Date | string
  products?: Product[]
}
