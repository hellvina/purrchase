import { comparePasswords, createJWT } from '../modules'
import { UserDb } from '../database'
import type { Request, Response } from 'express'
import { badRequest, okResponse, unauthorized } from '../helpers/httpHelper'

export const createNewUser = async (req: Request, res: Response): Promise<void> => {
  const data = {
    username: req.body?.username,
    email: req.body?.email,
    password: req.body?.password
  }

  const user = await UserDb.add(data)
  const token = createJWT(user)
  res.json({ token })
}

export const authUser = async (req: Request, res: Response): Promise<void> => {
  const username = req.body.username
  const requestPassword = req.body.password

  if (typeof username !== 'string' || typeof requestPassword !== 'string') {
    badRequest(res)
    return
  }

  const user = await UserDb.find(username)

  if (user === null) {
    badRequest(res)
    return
  }

  const userPassword = user?.password

  if (userPassword === undefined) {
    unauthorized(res)
    return
  }

  const isValid = await comparePasswords(requestPassword, userPassword)

  if (!isValid) {
    badRequest(res)
    return
  }

  const token = createJWT(user)
  okResponse(res, token)
}
