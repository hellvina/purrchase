import jwt from 'jsonwebtoken'

export const createJWT = (user): string => {
  const token = jwt.sign({
    id: user.id,
    username: user.username
  },
  process.env.JWT_SECRET
  )
  return token
}
