import { faker } from '@faker-js/faker'

const generateJTWFakeToken = (): string => {
  const payload = {
    userId: faker.string.uuid(),
    username: faker.internet.userName()
  }

  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64')
  const token = `eyJhbJGc6IInR5XVIUzI1NiIiOickpCIsCJ9.${encodedPayload}.fakeSignature`

  return token
}

const userName = faker.internet.userName()
const userEmail = faker.internet.exampleEmail()
const userPassword = faker.internet.password()
const userId = faker.string.uuid()

const userData = (userName: string, email: string, password: string) => ({
  username: faker.internet.userName(),
  email: faker.internet.exampleEmail(),
  password: faker.internet.password()
})

export {
  generateJTWFakeToken,
  userName,
  userEmail,
  userPassword,
  userData,
  userId
}
