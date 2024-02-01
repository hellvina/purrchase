import prisma from './db'
import { type Live } from '../models'
import { mergeObjects } from '../helpers'

export const add = async (liveData: Live): Promise<Live> => {
  const live = await prisma.live.create({
    data: {
      title: liveData.title,
      description: liveData.description,
      image: liveData.image,
      startDate: liveData.startDate,
      finishDate: liveData.finishDate,
      belongsTo: {
        connect: { id: liveData.belongsToId }
      },
      products: {
        create: liveData.products?.map(product => ({
          name: product.name,
          image: product.image,
          quantity: product.quantity
        }))
      }
    },
    include: {
      products: true
    }
  })

  return live
}

export const findById = async (userId: string): Promise<Live[] | null> => {
  const lives = await prisma.live.findMany({
    where: {
      belongsToId: userId
    }
  })

  return lives.length > 0 ? lives : null
}

export const findAll = async (page: number): Promise<Live[] | null> => {
  const limitByPage = 20

  try {
    const lives = await prisma.live.findMany({
      take: limitByPage,
      skip: (page - 1) * limitByPage,
      orderBy: {
        createdAt: 'desc'
      }
    })

    return lives.reverse()
  } catch (error) {
    console.error('Something is wrong with this query', error)
    return null
  }
}

// export const edit = async (liveId: string, liveData: Partial<Live>): Promise<Live | null> => {
// }

export const remove = async (liveId: string): Promise<Live | null> => {
  const liveExist = await prisma.live.findUnique({
    where: { id: liveId }
  })

  if (liveExist == null) {
    return null
  }

  try {
    const liveDeleted = await prisma.live.delete({
      where: {
        id: liveId
      }
    })

    return liveDeleted
  } catch (error) {
    console.log('Error deleting live:', error)
    return null
  }
}

export const edit = async (liveId: string, liveData: Partial<Live>): Promise<Live | unknown> => {
  const liveToUpdate = await prisma.live.findUnique({
    where: { id: liveId }
  })

  if (liveToUpdate === null) {
    console.error(`Not found live with ${liveId}`)
    throw new Error(`Not found live with ${liveId}`)
  }

  const newLiveToUpdate = mergeObjects({}, liveToUpdate)

  mergeObjects(newLiveToUpdate, liveData)

  const updatedLive = await prisma.live.update({
    where: { id: liveId },
    data: newLiveToUpdate
  })

  return updatedLive
}
