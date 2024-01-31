import prisma from './db'
import { hashPassword } from '../modules'
import type { User } from '../models'

export const add = async (userData: User): Promise<User> => {
  const hashedPassword = await hashPassword(userData.password)
  const user = await prisma.user.create({
    data: {
      username: userData.username,
      email: userData.email,
      password: hashedPassword
    }
  })

  return user
}

export const find = async (username: string | undefined): Promise<User | null> => {
  const user = await prisma.user.findUnique({
    where: { username }
  })

  return user
}
