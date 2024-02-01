import { ProductDb } from '../database'
import { type Request, type Response } from 'express'
import { badRequest, okResponse } from '../helpers/httpHelper'

export const listProducts = async (req: Request, res: Response): Promise<void> => {
  const liveId: string = req.body.liveId

  if (liveId === null) {
    badRequest(res)
    return
  }

  if (typeof liveId !== 'string') {
    badRequest(res)
    return
  }

  const producs = await ProductDb.find(liveId)
  okResponse(res, producs)
}
