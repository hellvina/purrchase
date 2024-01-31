import { comparePasswords, createJWT } from '../modules'
import { UserDb } from '../data'
import type { Request, Response } from 'express'


export const createNewUser = async (req: Request, res: Response) => {
  console.log(req.body)
  const data = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }

  const user = await UserDb.add(data)
  const token = createJWT(user)
  res.json({ token })
}

export const authUser = async (req: Request, res: Response) => {
  const user = await UserDb.find(req.body.username)

  if (user === null) {
    res.status(401).json({message: 'Successful authentication'})
   }

  const userPassword = user!.password
  const requestPassword = req.body.password
  const isValid = await comparePasswords(requestPassword, userPassword)

  if (!isValid) {
    res.status(401).json({message: 'Successful authentication'})
    return
  }

  const token = createJWT(user)
  res.status(200).json({token, message: 'Successful authentication'})
}