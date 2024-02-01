import { LiveDb } from '../database'
import { type Request, type Response } from 'express'
import { badRequest, okResponse, serverError, unauthorized } from '../helpers/httpHelper'
import { type Live } from '../models'

export const createNewLive = async (req: Request, res: Response): Promise<void> => {
  const data = {
    title: req.body?.title,
    description: req.body?.description,
    image: req.body?.image,
    startDate: req.body?.startDate,
    finishDate: req.body?.finishDate,
    belongsToId: req.body?.belongsToId,
    products: req.body?.products
  }

  const notValid = Object.values(data).some(param => param === undefined || param === null)

  if (notValid) {
    badRequest(res)
  }

  const live = await LiveDb.add(data)
  okResponse(res, live, 'Successful create live')
}

export const listLives = async (req: Request, res: Response): Promise<void> => {
  const userId: string = req.body.userId

  if (userId === null) {
    unauthorized(res)
    return
  }

  if (typeof userId !== 'string') {
    badRequest(res)
    return
  }

  const lives = await LiveDb.findById(userId)
  okResponse(res, lives)
}

export const allLives = async (req: Request, res: Response): Promise<void> => {
  const userToken = req.headers.authorization
  const page: string = req.query.page as string

  if (userToken === null) {
    unauthorized(res)
    return
  }

  if (page == null || typeof page !== 'string') {
    badRequest(res)
    return
  }

  const response = await LiveDb.findAll(page)
  okResponse(res, response)
}

export const deleteLive = async (req: Request, res: Response): Promise<void> => {
  const live: string = req.params.liveId

  if (live === null) {
    unauthorized(res)
  }

  if (typeof live !== 'string') {
    badRequest(res)
  }

  const response = await LiveDb.remove(live)
  okResponse(res, response)
}

export const editLive = async (req: Request, res: Response): Promise<void> => {
  const live: string = req.body.liveId
  const liveData: Partial<Live> = req.body.data

  if (live === null) {
    unauthorized(res)
  }

  if (typeof live !== 'string') {
    badRequest(res)
  }

  // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
  const response = await LiveDb.edit(live, liveData)

  if (response != null) {
    okResponse(res, response, 'Success updatedata')
  } else {
    serverError(res)
  }
}
