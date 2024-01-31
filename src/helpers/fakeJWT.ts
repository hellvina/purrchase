import { faker } from '@faker-js/faker'

export const generateJTWFakeToken = (): string => {
  const payload = {
    userId: faker.string.uuid(),
    username: faker.internet.userName()
  }

  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64')
  const token = `eyJhbJGc6IInR5XVIUzI1NiIiOickpCIsCJ9.${encodedPayload}.fakeSignature`

  return token
}
