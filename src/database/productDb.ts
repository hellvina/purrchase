import prisma from './db'
import type { Product } from '../models'

export const find = async (liveId: string): Promise<Product[] | null> => {
  try {
    const products = await prisma.product.findMany({
      where: { liveId }
    })
    return products
  } catch (error) {
    console.error('Something is wrong with this query', error)
    return null
  }
}
