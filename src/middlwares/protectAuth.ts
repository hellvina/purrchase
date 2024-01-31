import { type Request, type Response, type NextFunction } from 'express'
import jwt from 'jsonwebtoken'

interface AddUserRequest extends Request {
  user?: unknown
}

export const protect = (req: AddUserRequest, res: Response, next: NextFunction): void => {
  const bearer = req.headers.authorization

  if (bearer == null) {
    res.status(401).send('Not authorized')
    return
  }

  const [, token] = bearer.split(' ')

  if (token === '') {
    res.status(401).send('Not authorized')
    return
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.user = payload
    console.log(payload)
    next()
  } catch (e) {
    res.status(401)
    res.send('Not authorized')
  }
}
