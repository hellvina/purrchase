import * as bcrypt from 'bcrypt'

export const comparePasswords = async (password: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(password, hash)
}

export const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 5)
}
