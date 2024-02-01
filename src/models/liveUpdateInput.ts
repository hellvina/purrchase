export interface LiveUpdateInput {
  title?: string
  description?: string | null
  products?: {
    updateMany: Array<{
      where: {
        id: string
      }
      data: {
        name?: string
        image?: string
        quantity?: number
      }
    }>
  }
}
