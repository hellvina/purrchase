import type { Response } from 'express'

export const badRequest = (res: Response): void => {
  res.status(400).json({ message: 'Invalid Request. Provide a valid param' })
}
export const serverError = (res: Response): void => {
  res.status(500).json({ message: 'Internal Server error' })
}

export const unauthorized = (res: Response): void => {
  res.status(401).json({ message: 'Unauthorized' })
}

export const okResponse = (res: Response, data: unknown, message: string = 'Successful'): void => {
  res.status(200).json({ data })
}
